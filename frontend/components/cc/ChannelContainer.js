import { connect } from 'react-redux';
import CCView from './CCView';

const mSTP = (state, ownProps) => {
  const channelId = ownProps.match.params.ccId || state.entities.servers[ownProps.match.params.serverId].channels[0]

  return {
    cc: state.entities.channels[channelId],
    type: 'channel'
  };
};

const mDTP = () => ({
  requestCC: () => (null)
});

export default connect(mSTP, mDTP)(CCView);
