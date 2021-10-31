import { useEffect } from 'react';
import MemberIndex from '../members/MemberIndex';

const Conversation = ({ conversation, members, requestConversation, match }) => {
  useEffect(() => {
    requestConversation(match.params.conversationId);
  }, [match.params.conversationId])
  return conversation ? (
    <div className="conversation-main">
      <div>{conversation.name}</div>
      <MemberIndex members={members} />
    </div>
  ) : null
}

export default Conversation
