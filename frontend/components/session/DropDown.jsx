import { useState } from 'react';

const DropDown = ({ type }) => {
  const [showDD, setShowDD] = useState(false);
  const [text, setText] = useState("Select");

  const toggleDD = () => setShowDD(!showDD);

  let values = [];

  switch (type) {
    case "month":
      values = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      break;
    case "day":
      for (let i=1; i<=31; i++) {
        values.push(i);
      }
      break;
    case "year":
      const current = new Date().getFullYear();
      for (let i=current-3; i>current-103; i--) {
        values.push(i);
      }
      break;
  }

  const dd = (
    <div className="dd">
      { values.map(val => (
        <div className="dd-item" key={val}>{val}</div>
      ))}
    </div>
  )

  return (
    <div className={`dd-button dd-${type}`} onClick={toggleDD}>
      { text }
      { showDD && dd }
    </div>
  )
}

export default DropDown
