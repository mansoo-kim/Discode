import { useState, useEffect, useRef } from 'react';
import MessageForm from './MessageForm';

const ChatRoom = ({type, cc}) => {

  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const chat = App.cable.subscriptions.create(
      { channel: "ChatChannel", type: type, id: cc.id },
      { received: (data) => setMessages(oldMessages => [...oldMessages, data]) }
    )
    setChat(chat);
    return () => chat.unsubscribe();
  }, [type, cc.id]);

  // useEffect(() => {
  //   bottomRef.current.scrollIntoView();
  // })

  // const loadChat = (e) => {
  //   e.preventDefault();
  //   App.cable.subscriptions.subscriptions[0].load();
  // }

  const messageList = messages.map(message => {
    return (
      <li key={message.id}>
        {message.body}
      </li>
    )
  });

  return (
    <div className="chatroom-container">
      <div>ChatRoom</div>
      <div className="message-list">{messageList}</div>
      <MessageForm type={type} id={cc.id} chat={chat} />
    </div>
  )
}

export default ChatRoom
