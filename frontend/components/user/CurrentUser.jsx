import { useState } from 'react';
import UserSettings from './UserSettings';

const CurrentUser = ({ currentUser }) => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => (setShowSettings(!showSettings));

  return (
    <div className="current-user">
      <div>
        { currentUser.username }
        #{ currentUser.tag }
      </div>
      <button onClick={toggleSettings}>Settings</button>

      { showSettings && <UserSettings currentUser={currentUser} toggleSettings={toggleSettings} />}
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  currentUser: state.session
})

export default connect(mSTP)(CurrentUser);
