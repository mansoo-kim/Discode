import { useState } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = ({ registerNewUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);

  const handleSubmit = () => {
    const user = {
      email,
      password,
      username,
      dob: new Date(year, month, date)
    }
    registerNewUser(user)
  }

  const dobInput = (
    <label>DATE OF BIRTH
      <input type="number" value={month} onChange={e => setMonth(e.target.value)} />
      <input type="number" value={day} onChange={e => setDay(e.target.value)} />
      <input type="number" value={year} onChange={e => setYear(e.target.value)} />
    </label>
  )

  return (
    <div>
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <label>EMAIL
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>USERNAME
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>

        { dobInput }

        <label>PASSWORD
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button>Continue</button>

        <Link to='/login'>Already have an account?</Link>
      </form>
    </div>
  )
}

export default SessionForm
