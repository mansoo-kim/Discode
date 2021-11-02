import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ServerSettings = () => {
  return (
    <div className="settings-container">
      <div className="settings-left">
        testing
      </div>

      <div className="settings-right">
        <div className="settings-pane">

        </div>
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateChannel, deleteChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.channelId]
})

const mDTP = (dispatch) => ({
  updateChannel: (channelId, channel) => dispatch(updateChannel(channelId, channel)),
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
});

export default withRouter(connect(mSTP, mDTP)(ServerSettings));
