import { closeModalOnEscape } from '../../utils/close_utils';

const RemoveFriendModal = ({ friend, currentUserId, closeModal, deleteFriendship}) => {

  closeModalOnEscape(closeModal);

  const handleDelete = () => {
    deleteFriendship({
      user_id: currentUserId,
      friend_id: friend.id
    }).then(() => closeModal());
  };

  return (
    <div className="modal">
      <form onSubmit={handleDelete}>
        <h2>Remove '{friend.username}'</h2>

        <div className="modal-content">
          <p>Are you sure you want to permanently remove <span>{friend.username}</span> from your friends?</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button red-button">
            <div>Remove Friend</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { deleteFriendship } from "../../actions/friendship_actions";

const mSTP = (state) => ({
  currentUser: state.session
});


const mDTP = (dispatch) => ({
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
});

export default connect(mSTP, mDTP)(RemoveFriendModal);
