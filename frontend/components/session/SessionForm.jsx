import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import DropDownButton from './DropDownButton';

const SessionForm = ({ type, sessionErrors, processForm, resetSessionErrors, history }) => {

  const { register, formState: { errors }, handleSubmit, clearErrors, setValue, setError, getValues } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false
  });

  const processErrors = () => {
    if (sessionErrors['login']) {
      errors['password'] ||= { message: sessionErrors['login'] }
      errors['email'] ||= { message: sessionErrors['login'] }
    }
    if (sessionErrors['password']) errors['password'] ||= { message: sessionErrors['password'] }
    if (sessionErrors['email']) errors['email'] ||= { message: sessionErrors['email'] }
    if (sessionErrors['username']) errors['username'] ||= { message: sessionErrors['username'] }
  }

  processErrors();

  useEffect(() => {
    clearErrors();
    return () => resetSessionErrors();
  }, [])

  const checkThenSubmit = (e) => {
    e.preventDefault();

    if (type === 'register' && getValues("year") !== undefined && getValues("month") && getValues("day")) {
      clearErrors("dob");
    }
    handleSubmit(onSubmit)(e);
  }

  const onSubmit = (data) => {
    if (type === 'register') {
      if (!data.year || data.month === undefined || !data.day) {
        setError("dob", { message: "- This field is required"});
        return null;
      }
    }
    const formUser = type === 'login' ? {
      email: data.email,
      password: data.password
    } : {
      email: data.email,
      password: data.password,
      username: data.username,
      dob: new Date(data.year, data.month, data.day)
    }
    processForm(formUser).then(() => history.push('/@me'));
  }

  const handleDemoLogin = () => {
    setValue("email", "demo@gmail.com");
    setValue("password", "password");
    setTimeout(() => handleSubmit(onSubmit)(), 300);
  }

  const header = type === 'login' ? (
    <>
      <h1>Welcome back!</h1>
      <h2>We're so excited to see you again!</h2>
    </>
  ) : (
    <>
      <h3>Create an account</h3>
    </>
  )

  const usernameInput = type === 'register' ? (
    <div className={`input-container ${errors.username ? 'show-errors' : ''}`}>
      <label>USERNAME<span>{ errors.username && errors.username.message }</span></label>
      <input type="text" spellCheck="false" {...register("username", {
        required: "- This field is required",
        minLength: {
          value: 2,
          message: "- Must be between 2 and 32 in length"
        },
        maxLength: {
          value: 32,
          message: "- Must be between 2 and 32 in length"
        }
      })} />
    </div>
  ) : null;

  const passwordInput = type === 'register' ? (
      <input type="password" {...register("password", {
        required: "- This field is required",
        minLength: {
          value: 6,
          message: "- Must be 6 or more in length"
        }
      })} />
  ) : (
      <input type="password" {...register("password", { required: "- This field is required"})} />
  )

  const dobInput = type === 'register' ? (
    <div className={`input-container dob-container ${errors.dob ? 'show-errors' : ''}`}>
      <label>DATE OF BIRTH<span>{ errors.dob && errors.dob.message }</span></label>
      <div className={"dob-dds"}>
        <DropDownButton type="month" setValue={setValue} />
        <DropDownButton type="day" setValue={setValue} />
        <DropDownButton type="year" setValue={setValue} />
      </div>
    </div>
  ) : null;

  const demoButton = type === 'login' ? (
    <div onClick={handleDemoLogin} className="demo-button">
      Login as demo user
    </div>
  ) : null;

  const redirectLink = type === 'register' ? (
    <div className="redirect-div">
      <Link to='/login' className="redirect-link">Already have an account?</Link>
    </div>
  ) : (
    <div className="redirect-div">
      Need an account? <Link to='/register' className="redirect-link">Register</Link>
    </div>
  )

  return (
    <div className="outer-container">
      <div className="form-container">

        { header }

        <form className="session-form" onSubmit={checkThenSubmit}>

          <div className={`input-container ${errors.email ? 'show-errors' : ''}`}>
            <label>EMAIL<span>{ errors.email && errors.email.message }</span></label>
            <input type="email" spellCheck="false" {...register("email", { required: "- This field is required"})} />
          </div>

          { usernameInput }

          <div className={`input-container password-container ${errors.password ? 'show-errors' : ''}`}>
            <label>PASSWORD<span>{ errors.password && errors.password.message }</span></label>
            { passwordInput }
          </div>

          { dobInput }

          { demoButton }

          <button className="session-form-submit"><div className="submit-button">{type === 'register' ? "Continue" : "Login"}</div></button>

          { redirectLink }

          { type === 'register' && <p>By registering, you agree to Discode's <span className="redirect-link">Terms of Service</span> and <span className="redirect-link">Privacy Policy</span>.</p> }
        </form>

      </div>
    </div>
  )
}

export default SessionForm
