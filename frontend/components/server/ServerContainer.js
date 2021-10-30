import { connect } from 'react-redux';
import Server from './Server';
import { requestServer } from '../../actions/server_actions';
import { selectMembers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: state.entities.channels,
  members: selectMembers(state, "servers", ownProps.match.params.serverId)
})

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId))
});

export default connect(mSTP, mDTP)(Server);
