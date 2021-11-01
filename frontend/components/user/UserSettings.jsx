const UserSettings = ({ currentUser, toggleSettings, logout, openModal }) => {
  return (
    <div className="settings-container">
      <div className="settings-left">
        <div>
          User Settings
          <ul>
            <li>
              My Account
            </li>
            <li onClick={logout}>
              Log Out
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          <h2>My Account</h2>
          { currentUser.username }#{ currentUser.tag }

          <ul>
            <li>
              <div>
                <div>USERNAME</div>
                <div>{ currentUser.username }#{ currentUser.tag }</div>
              </div>
              <button onClick={() =>
                openModal({type: "editUser", property: "username"})}>
                  Edit
              </button>
            </li>
            <li>
              <div>
                <div>EMAIL</div>
                <div>{ currentUser.email }</div>
              </div>
              <button onClick={() =>
                openModal({type: "editUser", property: "email"})}>
                  Edit
              </button>
            </li>
          </ul>

        </div>
        <div className="close-settings">
          <button onClick={toggleSettings}>X</button>
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(null, mDTP)(UserSettings);
