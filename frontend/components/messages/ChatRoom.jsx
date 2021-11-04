import { useState, useEffect, useRef } from 'react';
import MessageForm from './MessageForm';
import MessageItem from './MessageItem';

const ChatRoom = ({ type, cc, currentUserId, messages, receiveMessage }) => {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const chat = App.cable.subscriptions.create(
      { channel: "ChatChannel", type: type, id: cc.id },
      { received: (data) => receiveMessage(data) }
    )
    setChat(chat);
    return () => chat.unsubscribe();
  }, [type, cc.id]);

  const bottomRef = useRef();

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView();
  }, [messages])

  const messageList = messages.map(message => {
    return <MessageItem key={message.id} message={message} currentUserId={currentUserId} />
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
import { receiveMessage } from '../../actions/message_actions';
import { selectMessages } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  messages: selectMessages(state, ownProps.type, ownProps.cc.id)
})

const mDTP = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(mSTP, mDTP)(ChatRoom);
