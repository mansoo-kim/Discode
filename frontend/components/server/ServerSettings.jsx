import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ServerSettings = ({ toggleSettings, server, updateServer, deleteServer, history }) => {
  return (
    <div className="settings-container">
      <div className="settings-left">
        testing
      </div>

      <div className="settings-right">
        <div className="settings-pane">

        </div>
      </div>
      <div className="close-settings">
          <button onClick={toggleSettings}>X</button>
        </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateServer, deleteServer } from '../../actions/server_actions';

// const mSTP = (state, ownProps) => ({
//   channel: state.entities.channels[ownProps.channelId]
// })

const mDTP = (dispatch) => ({
  updateServer: (serverId, server) => dispatch(updateServer(serverId, server)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId))
});

export default withRouter(connect(null, mDTP)(ServerSettings));
