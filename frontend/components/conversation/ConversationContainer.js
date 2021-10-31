import { connect } from 'react-redux';
import Conversation from './Conversation';
import { requestConversation } from '../../actions/conversation_actions';
import { selectMembers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  conversation: state.entities.conversations[ownProps.match.params.conversationId],
  members: selectMembers(state, "conversations", ownProps.match.params.conversationId)
});

const mDTP = (dispatch) => ({
  requestConversation: (conversationId) => dispatch(requestConversation(conversationId))
});

export default connect(mSTP, mDTP)(Conversation);
