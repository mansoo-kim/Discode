import { Link } from "react-router-dom";

const ConversationIndexItem = ({ conversation }) => {
  // const displayName = conversation.members.length > 2 ? conversation.name : "test"

  return (
    <div className={`cc-index-item`}>
      <Link className="channel-button" to={`/channels/@me/${conversation.id}`}>{ conversation.name }</Link>
    </div>
  )
}

export default ConversationIndexItem
