import { connect } from 'react-redux';
import CCView from './CCView';
import { requestConversation } from '../../actions/conversation_actions';

const mSTP = (state, ownProps) => ({
  cc: state.entities.conversations[ownProps.match.params.ccId],
  type: 'conversation'
});

const mDTP = (dispatch) => ({
  requestCC: (conversationId) => dispatch(requestConversation(conversationId))
});

export default connect(mSTP, mDTP)(CCView);
