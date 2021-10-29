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

  const handleSubmit = () => {
    if ((type === 'login' && email && password) || (email && username && password)) {
      processForm(formUser).then(() => history.push('/@me'));
    }
    // if (!email) {
    //   setEmptyEmail(true);
    // }
    // if (!password) {
    //   setEmptyPassword(true);
    // }
    // if (email) {
    //   setEmptyEmail(false);
    // }
    // if (password) {
    //   setEmptyPassword(false);
    // }
  }

  const handleDemoLogin = () => {
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

  const usernameInput = type === 'register' ? (
    <label>USERNAME {errors['username']}
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className={`session-input ${ emptyUsername || errors.length ? 'empty-input' : '' }`} />
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
    <button onClick={handleDemoLogin}>Login as demo user</button>
  ) : null;

  const submitButton = type === 'register' ? (
    <button onClick={handleSubmit}>Continue</button>
  ) : (
    <button onClick={handleSubmit}>Login</button>
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

      <form>
        <label>EMAIL { errors } { emptyEmail && "This field is required"}
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} className={`session-input ${ emptyEmail || errors.length ? 'empty-input' : '' }`} />
        </label>

        { usernameInput }

        <label>PASSWORD { errors } { emptyPassword && "This field is required"}
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={`session-input ${ emptyPassword || errors.length ? 'empty-input' : '' }`} />
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
