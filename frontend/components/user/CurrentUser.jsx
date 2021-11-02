import { useState, useEffect } from 'react';
import UserSettings from './UserSettings';

const CurrentUser = ({ currentUser, requestUser }) => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => (setShowSettings(!showSettings));

  useEffect(() => {
    requestUser(currentUser.id);
  }, [])

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
import { requestUser } from '../../actions/user_actions';

const mSTP = (state) => ({
  currentUser: state.session
})

const mDTP = (dispatch) => ({
  requestUser: (id) => dispatch(requestUser(id))
})

export default connect(mSTP, mDTP)(CurrentUser);
