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

export default ConversationIndex
