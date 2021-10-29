import { useState } from 'react';

const SessionForm = ({ processForm, type }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);

  const handleSubmit = () => {
    const user = {
      email,
      password
    }

    if (type === 'register') {
      user["dob"] = new Date(year, month, date);
      user["username"] = username;
    }

    processForm(user)
  }

  const usernameInput = (
    <label>USERNAME
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
  )

  const dobInput = (
    <label>DATE OF BIRTH
      <input type="number" value={month} onChange={e => setMonth(e.target.value)} />
      <input type="number" value={day} onChange={e => setDay(e.target.value)} />
      <input type="number" value={year} onChange={e => setYear(e.target.value)} />
    </label>
  )

  return (
    <form onSubmit={handleSubmit}>
      <label>EMAIL
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      { type === 'register' && usernameInput }
      { type === 'register' && dobInput }
      <label>PASSWORD
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>

      <button>Login</button>
    </form>
  )
}

export default SessionForm
