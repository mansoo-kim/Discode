import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ errors, login, resetSessionErrors }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  useEffect(() => {
    return () => resetSessionErrors();
  }, [])

  const handleLogin = () => {
    if (email && password) {
      const user = {
        email,
        password
      };
      login(user);
    }
    if (!email) {
      setEmptyEmail(true);
    }
    if (!password) {
      setEmptyPassword(true);
    }
    if (email) {
      setEmptyEmail(false);
    }
    if (password) {
      setEmptyPassword(false);
    }
  }

  const handleDemoLogin = () => {
    const user = {
      email: "demo@gmail.com",
      password: "demopassword"
    };
    login(user);
  }

  return (
    <div>
      <h1>Welcome back!</h1>
      <h2>We're so excited to see you again!</h2>
      <form>
        <label>EMAIL { errors } { emptyEmail && "This field is required"}
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} className={`session-input ${ emptyEmail || errors.length ? 'empty-input' : '' }`} />
        </label>

        <label>PASSWORD { errors } { emptyPassword && "This field is required"}
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={`session-input ${ emptyPassword || errors.length ? 'empty-input' : '' }`} />
        </label>

        <button onClick={handleDemoLogin}>Login as demo user</button>

        <button onClick={handleLogin}>Login</button>

        <p>Need an account?</p> <Link to='/register'>Register</Link>
      </form>
    </div>
  )
}

export default LoginForm
