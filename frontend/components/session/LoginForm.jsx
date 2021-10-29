import { useState } from 'react';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login({
      email,
      password
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>

      <button>Login</button>
    </form>
  )
}

export default LoginForm
