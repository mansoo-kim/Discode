import { useRef } from 'react';
import { closeOnEscape, closeOnOutsideClick } from '../../utils/close_utils';

const DropDown = ({ type, setValue, setText, setShowDD }) => {

  const popupRef = useRef();

  closeOnOutsideClick(popupRef, setShowDD);
  closeOnEscape(setShowDD);

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

  return (
    <div className="dd" ref={popupRef}>
      { values.map((val, i) => (
        <div className="dd-item" key={i} onClick={() => handleSelect(val, i)}>{val}</div>
      ))}
    </div>
  )
}

export default DropDown
