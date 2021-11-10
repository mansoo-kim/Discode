import { useEffect } from 'react';

const LogOutModal = ({ closeModal, logout}) => {

  const handleEscapeExit = (e) => {
    if (e.keyCode === 27) {
      e.stopImmediatePropagation();
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeExit, true);
    return () => document.removeEventListener("keydown", handleEscapeExit, true);
   }, []);

  const handleLogout = () => {
    logout()
      .then(() => closeModal());
  }

  return (
    <div className="modal">
      <form onSubmit={handleLogout}>
        <h2>Log Out</h2>

        <div className="modal-content">
          <p>Are you sure you want to logout?</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button red-button">
            <div>Log Out</div>
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
