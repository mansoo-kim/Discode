const LogOutModal = ({ closeModal, logout}) => {

  const handleLogout = () => {
    logout()
      .then(() => closeModal());
  }

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form>
        <h2>Log Out</h2>
        <p>Are you sure you want to logout?</p>

        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
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
