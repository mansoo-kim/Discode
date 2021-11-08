import { useState } from 'react';
import UserSettings from '../settings/UserSettings';
import UserPfp from './UserPfp';
import { CSSTransition } from 'react-transition-group';
import { BsFillGearFill } from 'react-icons/bs';

const CurrentUser = ({ currentUser }) => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => (setShowSettings(!showSettings));

  return (
    <div className="current-user-container">
      <div className="current-user">
        <div className="current-user-info">
          <UserPfp user={currentUser} />
          <div>
            <div className="username">{ currentUser.username }</div>
            <div className="tag">
              #{ currentUser.tag }
            </div>
          </div>
        </div>

        <div onClick={toggleSettings}>
          <BsFillGearFill size={17} />
        </div>
      </div>


      <CSSTransition
        in={showSettings}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="settings">
        <UserSettings toggleSettings={toggleSettings} currentUser={currentUser} />
      </CSSTransition>
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  currentUser: state.session
})

export default connect(mSTP)(CurrentUser);
