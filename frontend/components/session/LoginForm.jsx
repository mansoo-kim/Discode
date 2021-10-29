import { useState } from 'react';

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>

      <button>Login</button>
    </form>
  )
}

export default LoginForm
