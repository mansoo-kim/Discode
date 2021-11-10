import { useState } from 'react';
import UserPfp from "../user/UserPfp"
import UserPopup from '../user/UserPopup';

const MemberIndexItem = ({ member }) => {

  const [showOptions, setShowOptions] = useState(false);
  const togglePopup = () => setShowOptions(!showOptions);

  return (
    <div className="member-index-item" onClick={togglePopup}>
      { showOptions && <UserPopup user={member} />}
      <UserPfp user={member} />

      <div className="username">
        { member.username }
      </div>
    </div>
  )
}

export default MemberIndexItem
