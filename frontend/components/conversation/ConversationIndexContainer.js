import { connect } from 'react-redux';
import { requestConversations } from '../../actions/conversation_actions';
import ConversationIndex from './ConversationIndex';

const mSTP = (state) => ({
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  requestConversations: () => dispatch(requestConversations())
});

export default connect(mSTP, mDTP)(ConversationIndex);
