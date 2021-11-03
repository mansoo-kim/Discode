import { useState } from 'react';
import UserSettings from './UserSettings';

const CurrentUser = ({ currentUser }) => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => (setShowSettings(!showSettings));

  const imgSrc = currentUser.pfpUrl || 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'

  return (
    <div className="current-user">
      <div>
        <img src={imgSrc} className="pfp" />
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
