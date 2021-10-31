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

      { showSettings && <UserSettings logout={logout} />}
    </div>
  )
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(CurrentUser);
