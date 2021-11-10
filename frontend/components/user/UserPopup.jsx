const UserPopup = ({ user, top, currentUser, createFriendship, updateFriendship, deleteFriendship }) => {
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
    <div className="user-popup" style={{top: `${top}px`}} onClick={() => action(user.id)}>
      { label }
    </div>
  )
}

import { connect } from 'react-redux';
import { createFriendship, updateFriendship, deleteFriendship } from "../../actions/friendship_actions";

const mSTP = (state) => ({
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  createFriendship: (ids) => dispatch(createFriendship(ids)),
  updateFriendship: (ids) => dispatch(updateFriendship(ids)),
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids))
});

export default connect(mSTP, mDTP)(UserPopup);
