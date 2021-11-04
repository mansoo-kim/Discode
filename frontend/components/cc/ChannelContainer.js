import { connect } from 'react-redux';
import CCView from './CCView';
import { selectChannel } from '../../reducers/selectors';
import { requestChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => ({
  cc: selectChannel(state, ownProps.match.params.serverId, ownProps.match.params.ccId),
  type: 'Channel'
});

const mDTP = (dispatch) => ({
  requestCC: (channelId) => dispatch(requestChannel(channelId))
});

export default connect(mSTP, mDTP)(CCView);
