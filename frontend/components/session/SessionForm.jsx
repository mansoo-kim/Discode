import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SessionForm = ({ type, sessionErrors, processForm, resetSessionErrors, history }) => {

  const { register, formState: { errors }, handleSubmit, clearErrors, setValue } = useForm({
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

  const onSubmit = (data) => {
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

  const handleDemoLogin = (e) => {
    e.preventDefault();
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
      <h1>Create an account</h1>
    </>
  )

  const usernameInput = type === 'register' ? (
    <div className="input-container">
      <label>USERNAME { errors.username && errors.username.message }</label>
      <input type="text" {...register("username", {
        required: "This field is required",
        minLength: {
          value: 2,
          message: "Must be between 2 and 32 in length"
        },
        maxLength: {
          value: 32,
          message: "Must be between 2 and 32 in length"
        }
      })}
        className={ `session-input ${errors.username ? 'error-input' : ''}` } />
    </div>
  ) : null;

  const passwordInput = type === 'register' ? (
    <div className="input-container password-container">
      <label>PASSWORD { errors.password && errors.password.message }</label>
      <input type="password" {...register("password", {
        required: "This field is required",
        minLength: {
          value: 6,
          message: "Must be 6 or more in length"
        }
      })} className={ `session-input ${errors.password ? 'error-input' : ''}` } />
    </div>
  ) : (
    <div className="input-container password-container">
      <label>PASSWORD { errors.password && errors.password.message }</label>
      <input type="password" {...register("password", { required: "This field is required"})} className={ `session-input ${errors.password ? 'error-input' : ''}` } />
    </div>
  )

  const dobInput = type === 'register' ? (
    <label>DATE OF BIRTH
      <input type="number" {...register("month") } />
      <input type="number" {...register("day") } />
      <input type="number" {...register("year") } />
    </label>
  ) : null;

  // <input type='button' onClick={handleDemoLogin} value='Login as demo user' />
  const demoButton = type === 'login' ? (
    <div onClick={handleDemoLogin} className="demo-button">
      Login as demo user
    </div>
  ) : null;

  const submitButton = type === 'register' ? (
    <button className="session-form-submit">Continue</button>
  ) : (
    <button className="session-form-submit">Login</button>
  );

  const redirectLink = type === 'register' ? (
    <Link to='/login' className="redirect-link">Already have an account?</Link>
  ) : (
    <div className="need-account">
      Need an account? <Link to='/register' className="redirect-link">Register</Link>
    </div>
  )

  return (
    <div className="outer-container">
      <div className="form-container">

        { header }

        <form className="session-form" onSubmit={handleSubmit(onSubmit)}>

          <div className="input-container">
            <label>EMAIL { errors.email && errors.email.message }</label>
            <input type="text" {...register("email", { required: "This field is required"})} className={ `session-input ${errors.email ? 'error-input' : ''}` } />
          </div>

          { usernameInput }

          { passwordInput }

          { dobInput }

          { demoButton }

          { submitButton }

          { redirectLink }

        </form>

        { type === 'register' && <p>By registering, you agree to Discode's Terms of Service and Privacy Policy.</p> }
      </div>
    </div>
  )
}

export default SessionForm
