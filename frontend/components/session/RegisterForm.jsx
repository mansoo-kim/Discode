import { useState } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = ({ errors, registerNewUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(1);
  const [year, setYear] = useState(2021);

  const handleSubmit = () => {
    const user = {
      email,
      password,
      username,
      dob: new Date(year, month, day)
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
        <label>EMAIL {errors['email']}
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>USERNAME {errors['username']}
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>

        { dobInput }

        <label>PASSWORD {errors['password']}
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button>Continue</button>

        <Link to='/login'>Already have an account?</Link>
      </form>

      <p>By registering, you agree to Discode's Terms of Service and Privacy Policy.</p>
    </div>
  )
}

export default SessionForm
