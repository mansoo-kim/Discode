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
    <div className="member-index-item" onClick={handlePopupShow}>
      { showPopup && <UserPopup user={member} top={popupTop} setShowPopup={setShowPopup} /> }
      <UserPfp user={member} />

      <div className="username">
        { member.username }
      </div>
    </div>
  )
}

export default MemberIndexItem
