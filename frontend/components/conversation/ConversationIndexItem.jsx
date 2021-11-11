import UserPfp from '../user/UserPfp';
import { Link } from 'react-router-dom';
import { MdPeopleAlt } from 'react-icons/md';

const ConversationIndexItem = ({ conversation, members, currentUser }) => {

  const displayName = conversation.name || members.filter(member => member.id !== currentUser.id).map(member => member.username).join(", ");

  const displayIcon = members.length === 2 ? (
    <UserPfp user={members.filter(member => member.id !== currentUser.id)[0]} />
  ) : (
    <div className={`pfp-container default-dm`}>
      <div className='pfp'>
        <MdPeopleAlt />
      </div>
    </div>
  )

  return (
    <div className={`conversation-index-item`}>
      <Link className="conversation-button" to={`/channels/@me/${conversation.id}`}>
        { displayIcon }

        <div className="conversation-name">
          { displayName }
        </div>
      </Link>
    </div>
  )
}

export default ConversationIndexItem
