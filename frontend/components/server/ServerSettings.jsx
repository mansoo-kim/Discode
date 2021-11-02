import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateServer, deleteServer } from '../../actions/server_actions';
import SettingsPage from '../settings/SettingsPage';

const mSTP = (state, ownProps) => ({
  // channel: state.entities.channels[ownProps.channelId]
  type: "server"
})

const mDTP = (dispatch) => ({
  updateServer: (serverId, server) => dispatch(updateServer(serverId, server)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(SettingsPage));
