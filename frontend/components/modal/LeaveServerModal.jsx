const LeaveServerModal = ({ server, currentUserId, closeModal, deleteMembership, history }) => {

  const handleLeaving = () => {
    deleteMembership({
      user_id: currentUserId,
      joinable_id: server.id,
      joinable_type: "Server"
    })
      .then(() => history.push('/@me'))
      .then(() => closeModal());
  }

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form>
        <h2>Leave '{server.name}'</h2>
        <p>Are you sure you want to leave <span>{server.name}</span>? You won't be able to rejoin this server unless you are re-invited.</p>

        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={handleLeaving}>
          Leave Server
        </button>
      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { deleteMembership } from '../../actions/membership_actions';

const mDTP = (dispatch) => ({
  deleteMembership: (membership) => dispatch(deleteMembership(membership))
});

export default connect(null, mDTP)(LeaveServerModal);
