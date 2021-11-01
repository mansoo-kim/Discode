const ChannelSettings = ({ toggleSettings, channel }) => {
  return (
    <div className="settings-container">
      <div className="settings-left">
        <div>
          Channel Settings
          <ul>
            <li>
              Overview
            </li>
            <li>
              Delete Channel
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          <h2>OVERVIEW</h2>

          {/* <ul>
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
          </ul> */}

        </div>
        <div className="close-settings">
          <button onClick={toggleSettings}>X</button>
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';

const mDTP = (dispatch) => ({

})

export default connect(null, mDTP)(ChannelSettings);
