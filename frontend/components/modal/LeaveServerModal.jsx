import { closeModalOnEscape } from '../../utils/close_utils';

const LeaveServerModal = ({ server, currentUserId, closeModal, deleteMembership, history }) => {

  closeModalOnEscape(closeModal);

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
      <form onSubmit={handleLeaving}>
        <h2>Leave '{server.name}'</h2>

        <div className="modal-content">
          <p>Are you sure you want to leave <span>{server.name}</span>? You won't be able to rejoin this server unless you are re-invited.</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button red-button">
            <div>Leave Server</div>
          </button>
        </div>

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
