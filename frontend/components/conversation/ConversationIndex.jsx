import ConvesrationIndexItem from "./ConvesrationIndexItem";

const ConversationIndex = ({ conversations }) => {
  return (
    <ul>
        {conversations.map(conversation => <ConvesrationIndexItem key={conversation.id} conversation={conversation} />)}
    </ul>
  )
}

export default ConversationIndex
