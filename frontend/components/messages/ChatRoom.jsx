import { useState, useEffect, useRef } from 'react';
import MessageForm from './MessageForm';
import MessageItem from './MessageItem';

const ChatRoom = ({ type, cc, currentUserId, messages, receiveMessage, removeMessage }) => {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const chat = App.cable.subscriptions.create(
      { channel: "ChatChannel", type: type, id: cc.id },
      {
        received: (res) => {
          switch (res.type) {
            case 'message':
              receiveMessage(res.message);
              break;
            case 'remove':
              removeMessage(res.message);
              break;
          }
        },
        update: function(data) {
          return this.perform("update", data);
        },
        delete: function(data) {
          return this.perform("delete", data);
        }
      }
    )
    setChat(chat);
    return () => chat.unsubscribe();
  }, [type, cc.id]);

  const bottomRef = useRef();

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView();
  }, [messages])

  const messageList = messages.map(message => {
    return <MessageItem key={message.id} message={message} chat={chat} currentUserId={currentUserId} />
  });

  return (
    <div className="chatroom-container">
      <div className="message-list">
        { messageList }
        <div ref={bottomRef}></div>
      </div>
      <MessageForm currentUserId={currentUserId} type={type} id={cc.id} chat={chat} />
    </div>
  )
}

import { connect } from 'react-redux';
import { receiveMessage, removeMessage } from '../../actions/message_actions';
import { selectMessages } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  messages: selectMessages(state, ownProps.type, ownProps.cc.id)
})

const mDTP = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  removeMessage: (message) => dispatch(removeMessage(message))
})

export default connect(mSTP, mDTP)(ChatRoom);
