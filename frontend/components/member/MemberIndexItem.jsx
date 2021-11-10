import { useState } from 'react';
import UserPfp from "../user/UserPfp"
import MemberPopup from './MemberPopup';

const MemberIndexItem = ({ member }) => {

  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div className="member-index-item" onClick={toggleOptions}>
      {/* <div>
        <button onClick={() => action(member.id)}>{isFriend ? "Remove Friend" : "Add Friend"}</button>
      </div> */}
      <UserPfp user={member} />

      <div className="username">
        { member.username }
      </div>
    </div>
  )
}

export default MemberIndexItem
