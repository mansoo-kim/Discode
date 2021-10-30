import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SessionForm = ({ type, serverErrors, processForm, resetSessionErrors, history }) => {

  const { register, formState: { errors }, handleSubmit, clearErrors, setValue } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false
  });

  const processErrors = () => {
    if (serverErrors['login']) {
      errors['password'] ||= { message: serverErrors['login'] }
      errors['email'] ||= { message: serverErrors['login'] }
    }
    if (serverErrors['password']) errors['password'] ||= { message: serverErrors['password'] }
    if (serverErrors['email']) errors['email'] ||= { message: serverErrors['email'] }
    if (serverErrors['username']) errors['username'] ||= { message: serverErrors['username'] }
  }

  processErrors();

  console.log(errors);

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
    console.log(formUser);
    processForm(formUser).then(() => history.push('/channels/1/1')); // temporarily go to channels view instead of /@me
  }

  const handleDemoLogin = (e) => {
    e.preventDefault();
    setValue("email", "demo@gmail.com");
    setValue("password", "demopassword");
    setTimeout(() => handleSubmit(onSubmit)(), 500);
  }

  const header = type === 'login' ? (
    <div>
      <h1>Welcome back!</h1>
      <h2>We're so excited to see you again!</h2>
    </div>
  ) : (
    <div>
      <h1>Create an account</h1>
    </div>
  )

  const usernameInput = type === 'register' ? (
    <label>USERNAME { errors.username && errors.username.message }
      <input type="text" {...register("username", { required: "This field is required"})} className={ `session-input ${errors.username ? 'error-input' : ''}` } />
    </label>
  ) : null;

  const dobInput = type === 'register' ? (
    <label>DATE OF BIRTH
      <input type="number" {...register("month") } />
      <input type="number" {...register("day") } />
      <input type="number" {...register("year") } />
    </label>
  ) : null;

  const demoButton = type === 'login' ? (
    <input type='button' onClick={handleDemoLogin} value='Login as demo user' />
  ) : null;

  const submitButton = type === 'register' ? (
    <button>Continue</button>
  ) : (
    <button>Login</button>
  );

  const redirectLink = type === 'register' ? (
    <Link to='/login'>Already have an account?</Link>
  ) : (
    <div>
      Need an account?<Link to='/register'>Register</Link>
    </div>
  )

  return (
    <div>

      { header }

      <form className="session-form" onSubmit={handleSubmit(onSubmit)}>
        <label>EMAIL { errors.email && errors.email.message }
          <input type="text" {...register("email", { required: "This field is required"})} className={ `session-input ${errors.email ? 'error-input' : ''}` } />
        </label>

        { usernameInput }

        <label>PASSWORD { errors.password && errors.password.message }
          <input type="password" {...register("password", { required: "This field is required"})} className={ `session-input ${errors.password ? 'error-input' : ''}` } />
        </label>

        { dobInput }

        { demoButton }

        { submitButton }

        { redirectLink }
      </form>

      { type === 'register' && <p>By registering, you agree to Discode's Terms of Service and Privacy Policy.</p> }
    </div>
  )
}

export default SessionForm
