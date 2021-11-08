const LogOutModal = ({ closeModal, logout}) => {

  const handleLogout = () => {
    logout()
      .then(() => closeModal());
  }

  return (
    <div className="modal">
      <form onSubmit={handleLogout}>

        <div className="modal-content">
          <h2>Log Out</h2>
          <p>Are you sure you want to logout?</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button">
            Log Out
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(null, mDTP)(LogOutModal);
