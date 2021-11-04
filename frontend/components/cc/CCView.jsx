import { useEffect } from 'react';
import MemberIndex from '../member/MemberIndex';
import ChatRoom from '../messages/ChatRoom';

const CCView = ({ cc, type, requestCC, match }) => {
  useEffect(() => {
    requestCC(match.params.ccId);
  }, [match.params.ccId])

  return cc ? (
    <div className="cc-view">
      <div className="cc-header">
        showing {type}: { cc.name }
      </div>

      <div className="cc-main">
        <ChatRoom cc={cc} type={type}/>

        <MemberIndex type={type === "Conversation" ? "conversations" : "servers"} id={type === "Conversation" ? match.params.ccId : match.params.serverId} />
      </div>

    </div>
  ) : null
}

export default CCView
