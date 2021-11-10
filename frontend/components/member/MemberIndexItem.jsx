import { useState } from 'react';
import UserPfp from "../user/UserPfp"
import UserPopup from '../user/UserPopup';

const MemberIndexItem = ({ member }) => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="member-index-item" tabIndex="0" onClick={() => setShowPopup(!showPopup)} onBlur={() => setShowPopup(false)}>
      { showPopup && <UserPopup user={member} />}
      <UserPfp user={member} />

      <div className="username">
        { member.username }
      </div>
    </div>
  )
}

export default MemberIndexItem
