import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateChannel, deleteChannel } from '../../actions/channel_actions';
import SettingsPage from '../settings/SettingsPage';

const mSTP = (state, ownProps) => ({
  subject: state.entities.channels[ownProps.channelId],
  type: "channel"
})

const mDTP = (dispatch) => ({
  updateSubject: (channelId, channel) => dispatch(updateChannel(channelId, channel)),
  deleteSubject: (channelId) => dispatch(deleteChannel(channelId))
});

export default withRouter(connect(mSTP, mDTP)(SettingsPage));
