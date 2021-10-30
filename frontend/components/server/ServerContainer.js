import { connect } from 'react-redux';
import Server from './Server';
import { requestServer } from '../../actions/server_actions';

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: state.entities.channels,
  activeChannelId: ownProps.match.params.channelId
})

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId))
});

export default connect(mSTP, mDTP)(Server);
