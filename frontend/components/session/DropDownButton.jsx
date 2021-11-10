import { useState } from 'react';
import DropDown from './DropDown';
import { FaChevronDown } from 'react-icons/fa'

const DropDownButton = ({ type, setValue }) => {
  const [showDD, setShowDD] = useState(false);
  const [text, setText] = useState("Select");

  const toggleDD = () => setShowDD(!showDD);

  return (
    <div className={`dd-button dd-${type}`} onClick={toggleDD}>
      <div className={text !== "Select" ? "" : "unselected"}>
        { text }
      </div>

      <FaChevronDown size={13} />
      { showDD && <DropDown type={type} setValue={setValue} setText={setText} setShowDD={setShowDD} /> }
    </div>
  )
}

export default DropDownButton
