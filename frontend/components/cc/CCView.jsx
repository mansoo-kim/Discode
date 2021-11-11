import { useEffect } from 'react';
import MemberIndex from '../member/MemberIndex';
import ChatRoom from '../messages/ChatRoom';
import { FaHashtag } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';

const CCView = ({ cc, type, members, requestCC }) => {
  useEffect(() => {
    if (cc?.id) requestCC(cc.id);
  }, [cc?.id])

  return cc ? (
    <div className="cc-view">
      <div className="cc-header">
        <div>
          <div className="cc-hash">{ type === "Channel" ? <FaHashtag size={20} /> : <MdPeopleAlt size={20} /> }</div>
          <div className="cc-name">{ cc.name }</div>
        </div>
      </div>

      <div className="cc-main">
        <ChatRoom cc={cc} type={type}/>

        <MemberIndex members={members} />
      </div>

    </div>
  ) : null
}

export default CCView
