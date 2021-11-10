import { useState } from 'react';
import UserPfp from "../user/UserPfp"

const MemberIndexItem = ({ member, action, isFriend }) => {

  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div className="member-index-item" onClick={toggleOptions}>
      <div>
        <button onClick={() => action(member.id)}>{isFriend ? "Remove Friend" : "Add Friend"}</button>
      </div>
      <UserPfp user={member} />
      { member.username }
    </div>
  )
}

export default MemberIndexItem
