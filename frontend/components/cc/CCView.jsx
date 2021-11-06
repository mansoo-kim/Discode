import { useEffect } from 'react';
import MemberIndex from '../member/MemberIndex';
import ChatRoom from '../messages/ChatRoom';
import { HiOutlineHashtag } from 'react-icons/hi';

const CCView = ({ cc, type, requestCC, match }) => {
  useEffect(() => {
    if (cc?.id) requestCC(cc.id);
  }, [cc?.id])

  return cc ? (
    <div className="cc-view">
      <div className="cc-header">
        <div>
          <div className="cc-hash"><HiOutlineHashtag size={25} /></div>
          <div className="cc-name">{ cc.name }</div>
        </div>
      </div>

      <div className="cc-main">
        <ChatRoom cc={cc} type={type}/>

        <MemberIndex type={type === "Conversation" ? "conversations" : "servers"} id={type === "Conversation" ? match.params.ccId : match.params.serverId} />
      </div>

    </div>
  ) : null
}

export default CCView
