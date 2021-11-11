import { useEffect } from 'react';
import MemberIndex from '../member/MemberIndex';
import ChatRoom from '../messages/ChatRoom';
import { FaHashtag } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';

const CCView = ({ cc, type, members, currentUser, requestCC }) => {
  if (!cc) return null;

  useEffect(() => {
    if (cc?.id) requestCC(cc.id);
  }, [cc?.id])

  let displayName;
  if (type === "Channel" || members.length > 2) {
    displayName = cc.name;
  } else {
    displayName = members.filter(member => member.id !== currentUser.id)[0].username
  }

  return (
    <div className="cc-view">
      <div className="cc-header">
        <div>
          <div className="cc-hash">{ type === "Channel" ? <FaHashtag size={20} /> : <MdPeopleAlt size={20} /> }</div>
          <div className="cc-name">{ displayName }</div>
        </div>
      </div>

      <div className="cc-main">
        <ChatRoom cc={cc} type={type}/>

        <MemberIndex members={members} />
      </div>

    </div>
  )
}

export default CCView
