import { useEffect } from 'react';
import MemberIndex from '../member/MemberIndex';
import ChatRoom from '../messages/ChatRoom';

const CCView = ({ cc, type, requestCC, match }) => {
  useEffect(() => {
    requestCC(match.params.ccId);
  }, [match.params.ccId])

  return cc ? (
    <div className="cc-view">
      <div>
        showing {type}: { cc.name }
      </div>

      <ChatRoom />

      <MemberIndex type={type === "conversation" ? "conversations" : "servers"} id={type === "conversation" ? match.params.ccId : match.params.serverId} />
    </div>
  ) : null
}

export default CCView
