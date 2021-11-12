import { useRef } from 'react';
import { closeOnEscape, closeOnOutsideClick } from '../../utils/close_utils';

const UserPopup = ({ user, top, setShowPopup, currentUser, conversations, createFriendship, updateFriendship, createConversation, openModal, history }) => {
  if (user.id === currentUser.id) return null;

  const popupRef = useRef();

  closeOnOutsideClick(popupRef, setShowPopup);
  closeOnEscape(setShowPopup);

  const handleCreate = (friend) => {
    createFriendship({
      user_id: currentUser.id,
      friend_id: friend.id
    });
    setShowPopup(false);
  };

  const handleUpdate = (friend) => {
    updateFriendship({
      user_id: currentUser.id,
      friend_id: friend.id
    });
    setShowPopup(false);
  };

  const handleRemove = (friend) => {
    openModal({type: "removeFriend", currentUserId: currentUser.id, friend})
    setShowPopup(false);
  }

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleConversationStart = () => {
    const groupIds = [currentUser.id, user.id].sort((a,b) => a-b);
    for (let conversation of conversations) {
      if (arrayEquals(conversation.members.sort((a,b) => a-b), groupIds)) {
        if (history.location.pathname !== `/channels/@me/${conversation.id}`) history.push(`/channels/@me/${conversation.id}`);
        setShowPopup(false);
        return;
      }
    }
    createConversation({member_ids: groupIds})
      .then(({ res })=> history.push(`/channels/@me/${res.conversation.id}`));
    setShowPopup(false);
  }

  let action;
  let label;
  switch (user.status) {
    case 3:
      action = handleRemove;
      label = "Remove Friend";
      break;
    case 2:
      action = handleUpdate;
      label = "Add Friend";
      break;
    case 1:
      action = () => setShowPopup(false);
      label = "Add Friend";
      break;
    default:
      action = handleCreate;
      label = "Add Friend";
  }

  return (
    <div className="popup-container">
      <div className="user-popup" style={{top: `${top}px`}} ref={popupRef}>
        <div onClick={handleConversationStart} className="user-option">
          <span>
            Message

          </span>
        </div>
        <div onClick={() => action(user)} className="user-option">
          { label }
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createFriendship, updateFriendship } from "../../actions/friendship_actions";
import { createConversation } from '../../actions/conversation_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUser: state.session,
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  createFriendship: (ids) => dispatch(createFriendship(ids)),
  updateFriendship: (ids) => dispatch(updateFriendship(ids)),
  createConversation: (conversation) => dispatch(createConversation(conversation)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(UserPopup));
