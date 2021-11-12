import UserPfp from "../user/UserPfp";
import { FaCheck } from 'react-icons/fa';

const SelectFriendItem = ({ friend, inputRef, toggleFriend, selectedFriends }) => {
  return (
    <div className="select-friend-item" onClick={() => {
      toggleFriend(friend);
      inputRef.current.focus();
    }}>
        <div>
          <UserPfp user={friend} />
          <div className="friend-tag">
            { friend.username }
            <span>#{friend.tag}</span>
          </div>
        </div>

        <div className={`empty-checkbox ${selectedFriends[friend.id] ? "selected" : ""}`}>
          <div className={`${selectedFriends[friend.id] ? "visible" : ""}`}>
            <FaCheck />
          </div>
        </div>
    </div>
  )
}

export default SelectFriendItem
