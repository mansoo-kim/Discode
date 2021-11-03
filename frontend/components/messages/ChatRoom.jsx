import { useState, useEffect, useRef } from 'react';
import MessageForm from './MessageForm';

const ChatRoom = ({}) => {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef();

  useEffect(() => {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch(data.type) {
            case "message":
              setMessages(messages.concat(data.message));
              break;
            case "messages":
              setMessages(data.messages);
              break;
          }
        },
        speak: function(data) { return this.perform("speak", data) },
        load: function() { return this.perform("load") }
      },
    );
  }, []);

  useEffect(() => {
    bottomRef.current.scrollIntoView();
  })

  const loadChat = (e) => {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }

  const messageList = messages.map(message => {
    return (
      <li key={message.id}>
        {message}
        <div ref={this.bottom} />
      </li>
    )
  });

  return (
    <div className="chatroom-container">
      <div>ChatRoom</div>
      <button className="load-button"
        onClick={loadChat}>
        Load Chat History
      </button>
      <div className="message-list">{messageList}</div>
      <MessageForm />
    </div>
  )
}

export default ChatRoom
