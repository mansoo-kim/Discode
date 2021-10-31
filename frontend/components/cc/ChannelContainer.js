import { connect } from 'react-redux';
import CCView from './CCView';

const mSTP = (state, ownProps) => ({
  cc: state.entities.channels[ownProps.match.params.ccId],
  type: 'channel'
});

const mDTP = (dispatch) => ({
  requestCC: () => (null)//dispatch(requestConversation(channelId))
});

export default connect(mSTP, mDTP)(CCView);
