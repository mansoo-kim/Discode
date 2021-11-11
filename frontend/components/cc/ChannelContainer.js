import { connect } from 'react-redux';
import CCView from './CCView';
import { selectChannel } from '../../reducers/selectors';
import { requestChannel } from '../../actions/channel_actions';
import { selectMembers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  cc: selectChannel(state, ownProps.match.params.serverId, ownProps.match.params.ccId),
  type: 'Channel',
  members: selectMembers(state, "servers", ownProps.match.params.serverId),
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  requestCC: (channelId) => dispatch(requestChannel(channelId)),
  updateCC: () => null
});

export default connect(mSTP, mDTP)(CCView);
