import { useState, useEffect } from 'react';
import UserPfp from "../user/UserPfp"
import UserPopup from '../user/UserPopup';

const MemberIndexItem = ({ member }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [popupTop, setPopupTop] = useState(0);

  const handlePopupShow = (e) => {
    setPopupTop(e.currentTarget.getBoundingClientRect().top)
    setShowPopup(!showPopup);
  };

  const handleEscapeExit = (e) => {
    if (e.keyCode === 27) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
   document.addEventListener("keydown", handleEscapeExit);
   return () => document.removeEventListener("keydown", handleEscapeExit);
  }, []);

  return (
    <div className="member-index-item" tabIndex="0" onClick={handlePopupShow} onBlur={() => setShowPopup(false)}>
      { showPopup && <UserPopup user={member} top={popupTop} /> }
      <UserPfp user={member} />

      <div className="username">
        { member.username }
      </div>
    </div>
  )
}

export default MemberIndexItem
