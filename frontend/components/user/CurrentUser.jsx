import UserSettings from './UserSettings';
import { useState } from 'react';

const CurrentUser = ({ currentUser, logout }) => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => (setShowSettings(!showSettings));

  return (
    <div>
      <div>
        { currentUser.username }
        #{ currentUser.tag }
      </div>
      <button onClick={toggleSettings}>Settings</button>

      { showSettings && <UserSettings currentUser={currentUser} toggleSettings={toggleSettings} logout={logout} openModal={openModal} />}
    </div>
  )
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(CurrentUser);
