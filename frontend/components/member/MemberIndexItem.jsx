import { useState } from 'react';
import UserPfp from "../user/UserPfp"
import UserPopup from '../user/UserPopup';

const MemberIndexItem = ({ member }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [popupTop, setPopupTop] = useState(0);

  const handlePopupShow = (e) => {
    setPopupTop(e.currentTarget.getBoundingClientRect().top)
    setShowPopup(!showPopup);
  };

  return (
    <div className="member-index-item" tabIndex="0" onClick={handlePopupShow} onBlur={() => setShowPopup(false)}>
      { showPopup &&
        <div className="user-popup-container">
          <UserPopup user={member} top={popupTop} />
        </div>}
      <UserPfp user={member} />

      <div className="username">
        { member.username }
      </div>
    </div>
  )
}

export default MemberIndexItem
