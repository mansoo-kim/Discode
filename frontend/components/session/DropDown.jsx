import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'

const DropDown = ({ type, setValue }) => {
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

  const handleSelect = (val, i) => {
    setText(val);
    setValue(type, type === "month" ? i : val);
  }

  const dd = (
    <div className="dd">
      { values.map((val, i) => (
        <div className="dd-item" key={i} onClick={() => handleSelect(val, i)}>{val}</div>
      ))}
    </div>
  )

  return (
    <div tabIndex="0" className={`dd-button dd-${type}`} onClick={toggleDD} onBlur={() => setShowDD(false)}>
      <div className={text !== "Select" ? "" : "unselected"}>
        { text }
      </div>

      <FaChevronDown size={13} />
      { showDD && dd }
    </div>
  )
}

export default DropDown
