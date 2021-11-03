import { useState, useEffect, useRef } from 'react';
import MessageForm from './MessageForm';

const ChatRoom = ({type, cc}) => {
  console.log(cc);
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    setChat(App.cable.subscriptions.create(
      { channel: "ChatChannel", type: type, id: cc.id },
      {
        received: (data) => setMessages(oldMessages => [...oldMessages, data])
      }
    ))
  }, [cc.id]);

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
      <MessageForm type={type} id={cc.id} chat={chat.current} />
    </div>
  )
}

export default ChatRoom
