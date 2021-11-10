const UserPopup = ({ user, top, currentUser, conversations, createFriendship, updateFriendship, deleteFriendship, createConversation, history }) => {
  if (user.id === currentUser.id) return null;

  const handleCreate = (friendId) => {
    createFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  const handleUpdate = (friendId) => {
    updateFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  const handleDelete = (friendId) => {
    deleteFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleConversationStart = () => {
    const groupIds = [currentUser.id, user.id].sort((a,b) => a-b);
    for (let conversation of conversations) {
      if (arrayEquals(conversation.members, groupIds)) {
        if (history.location.pathname !== `/channels/@me/${conversation.id}`) history.push(`/channels/@me/${conversation.id}`);
        return;
      }
    }
    createConversation({member_ids: groupIds})
      .then(({ res })=> history.push(`/channels/@me/${res.conversation.id}`))
  }

  let action;
  let label;
  switch (user.status) {
    case 3:
      action = handleDelete;
      label = "Remove Friend";
      break;
    case 2:
      action = handleUpdate;
      label = "Add Friend";
      break;
    case 1:
      action = () => null;
      label = "Add Friend";
      break;
    default:
      action = handleCreate;
      label = "Add Friend";
  }

  return (
    <div className="popup-container">
      <div className="user-popup" style={{top: `${top}px`}}>
        <div onClick={handleConversationStart}>
          Message
        </div>
        <div onClick={() => action(user.id)}>
          { label }
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createFriendship, updateFriendship, deleteFriendship } from "../../actions/friendship_actions";
import { createConversation } from '../../actions/conversation_actions';

const mSTP = (state) => ({
  currentUser: state.session,
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  createFriendship: (ids) => dispatch(createFriendship(ids)),
  updateFriendship: (ids) => dispatch(updateFriendship(ids)),
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
  createConversation: (conversation) => dispatch(createConversation(conversation))
});

export default withRouter(connect(mSTP, mDTP)(UserPopup));
