import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ errors, type, processForm, resetSessionErrors, history }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(1);
  const [year, setYear] = useState(2021);

  const formUser = type === 'login' ? {
    email,
    password
  } : {
    email,
    username,
    password,
    dob: new Date(year, month, day)
  }

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  useEffect(() => {
    return () => resetSessionErrors();
  }, [])

  const checkEmptyInputs = () => {
    email ? setEmptyEmail(false) : setEmptyEmail(true)
    username ? setEmptyUsername(false) : setEmptyUsername(true)
    password ? setEmptyPassword(false) : setEmptyPassword(true)
  }

  const handleSubmit = () => {
    // resetSessionErrors();
    if ((type === 'login' && email && password) || (email && username && password)) {
      processForm(formUser).then(() => history.push('/@me'));
    }
    checkEmptyInputs();
  }

  const handleDemoLogin = (e) => {
    e.preventDefault();
    const user = {
      email: "demo@gmail.com",
      password: "demopassword"
    };
    processForm(user).then(() => history.push('/@me'));
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

  // { emailError } { emptyEmail && "This field is required"}
  const emailError = Array.isArray(errors) ? (errors.length ? errors : "") : errors['email'];
  const usernameError = Array.isArray(errors) ? (errors.length ? errors : "") : errors['username'];
  const passwordError = Array.isArray(errors) ? (errors.length ? errors : "") : errors['password'];

  const emailMessage = emptyEmail ? "This field is required" : Array.isArray(errors) ? (errors.length ? errors : "") : errors['email']
  const usernameMessage = emptyUsername ? "This field is required" : Array.isArray(errors) ? (errors.length ? errors : "") : errors['username']
  const passwordMessage = emptyPassword ? "This field is required" : Array.isArray(errors) ? (errors.length ? errors : "") : errors['password']

  const usernameInput = type === 'register' ? (
    <label>USERNAME { usernameMessage }
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className={`session-input ${ emptyUsername || usernameError ? 'empty-input' : '' }`} />
    </label>
  ) : null;

  const dobInput = type === 'register' ? (
    <label>DATE OF BIRTH
      <input type="number" value={month} onChange={e => setMonth(e.target.value)} />
      <input type="number" value={day} onChange={e => setDay(e.target.value)} />
      <input type="number" value={year} onChange={e => setYear(e.target.value)} />
    </label>
  ) : null;

  const demoButton = type === 'login' ? (
    <input type='button' onClick={handleDemoLogin} value='Login as demo user' />
  ) : null;

  const submitButton = type === 'register' ? (
    <button default onClick={handleSubmit}>Continue</button>
  ) : (
    <button default onClick={handleSubmit}>Login</button>
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

      <form className="session-form">
        <label>EMAIL { emailMessage }
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} className={`session-input ${ emptyEmail || emailError ? 'empty-input' : '' }`} />
        </label>

        { usernameInput }

        <label>PASSWORD { passwordMessage }
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={`session-input ${ emptyPassword || passwordError ? 'empty-input' : '' }`} />
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

export default LoginForm
