import { useEffect } from 'react';
import ConvesrationIndexItem from "./ConvesrationIndexItem";

const ConversationIndex = ({ conversations, requestConversations }) => {
  useEffect(() => {
    requestConversations();
  }, [])

  return (
    <div className="conversations-index">
      <ul>
          {conversations.map(conversation => <ConvesrationIndexItem key={conversation.id} conversation={conversation} />)}
      </ul>
    </div>
  )
}

import { connect } from 'react-redux';
import { requestConversations } from '../../actions/conversation_actions';

const mSTP = (state) => ({
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  requestConversations: () => dispatch(requestConversations())
});

export default connect(mSTP, mDTP)(ConversationIndex);
