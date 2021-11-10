const MemberPopup = ({ currentUser, createFriendship, updateFriendship, deleteFriendship }) => {
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

  return (
    <div>

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

export default connect(mSTP, mDTP)(MemberPopup);
