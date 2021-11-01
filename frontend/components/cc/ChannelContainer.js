import { connect } from 'react-redux';
import CCView from './CCView';

const mSTP = (state, ownProps) => ({
  cc: state.entities.channels[ownProps.match.params.ccId || state.entities.servers[ownProps.match.params.serverId].channels[0]],
  type: 'channel'
});

const mDTP = () => ({
  requestCC: () => (null)
});

export default connect(mSTP, mDTP)(CCView);
