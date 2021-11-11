import { Link } from "react-router-dom";

const ConversationIndexItem = ({ conversation, members, currentUser }) => {

  let displayName;
  if ( conversation.name ) {
    displayName = conversation.name
  } else {
    displayName = members.filter(member => member.id !== currentUser.id).map(member => member.username).join(", ")
  }
  return (
    <div className={`cc-index-item`}>
      <Link className="channel-button" to={`/channels/@me/${conversation.id}`}>{ displayName }</Link>
    </div>
  )
}

export default ConversationIndexItem
