import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      email,
      password
    };
    login(user);
  }

  return (
    <div>
      <h1>Welcome back!</h1>
      <h2>We're so excited to see you again!</h2>
      <form onSubmit={handleSubmit}>
        <label>EMAIL
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>PASSWORD
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button>Login</button>

        <p>Need an account?</p> <Link to='/register'>Register</Link>
      </form>
    </div>
  )
}

export default LoginForm
