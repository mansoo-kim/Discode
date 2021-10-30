import { connect } from 'react-redux';
import Server from './Server';

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
})

const mDTP = (dispatch) => ({
  requestServers: () => dispatch(requestServers())
});

export default connect(mSTP, mDTP)(Server);
