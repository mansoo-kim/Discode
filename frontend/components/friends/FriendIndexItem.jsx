import UserPfp from '../user/UserPfp';
import { MdChatBubble } from 'react-icons/md';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const FriendIndexItem = ({ friend, action1, action2, subtext }) => {

  let label1, label2, icon1, icon2;

  switch (friend.status) {
    case 3:
      label1 = "Message", label2 = "Remove"
      icon1 = <MdChatBubble />, icon2 = <RiDeleteBin5Fill />
      break;
    case 2:
      label1 = "Accept", label2 = "Ignore"
      icon1 = <FaCheck />, icon2 = <FaTimes />
      break;
    case 1:
      label2 = "Cancel"
      icon2 = <FaTimes />
      break;
  }

  return (
    <div className="friend-index-item-wrapper">
      <div className="friend-index-item">
        <div className="friend-info">
          <UserPfp user={friend} />
          <div>
            <div className="friend-tag">
              { friend.username }
              <span>#{friend.tag}</span>
            </div>
            { subtext && <div className="subtext">{subtext}</div>}
          </div>
        </div>

        <div className="friend-buttons">
          { friend.status !== 1 &&
            <div className="green-button" onClick={() => action1(friend.id)}>
              { icon1 }
              <div className="hover-label">
                { label1 }
              </div>
              <div className="hover-triangle"></div>
            </div>}

          <div className="red-button" onClick={() => action2(friend.id)}>
            { icon2 }
            <div className="hover-label">
              { label2 }
            </div>
            <div className="hover-triangle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendIndexItem
