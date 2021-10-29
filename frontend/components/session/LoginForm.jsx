import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = {
      email,
      password
    };
    login(user);
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
        <label>EMAIL
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>PASSWORD
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button onClick={handleDemoLogin}>Login as demo user</button>

        <button onClick={handleLogin}>Login</button>

        <p>Need an account?</p> <Link to='/register'>Register</Link>
      </form>
    </div>
  )
}

export default LoginForm
