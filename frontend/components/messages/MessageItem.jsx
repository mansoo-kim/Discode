import { useState } from 'react';

const MessageItem = ({ message, chat, currentUserId, sender }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [body, setBody] = useState(message.body);

  const toggleEdit = () => setShowEdit(!showEdit);
  const toggleDelete = () => setShowDelete(!showDelete);

  const handleEdit = (e) => {
    e.preventDefault();
    chat.update(
      {
        id: message.id,
        body: body
      }
    );
    setBody("");
  }

  const imgSrc = sender.pfpUrl || 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'

  const editInput = (
    <form onSubmit={handleEdit}>
      <input type="text" value={body} onChange={(e) => setBody(e.currentTarget.value)} />
    </form>
  )

  const buttons = currentUserId === sender.id ? (
    <div className="message-buttons">
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={toggleDelete}>Delete</button>
    </div>
  ) : null;

  return (
    <div className="message-item">
      <div className="message-pfp">
        <img src={imgSrc} className="pfp" />
      </div>

      <div className="message-content">
        <div className="message-body">
        { showEdit ? editInput : message.body }
        </div>
        { buttons }
      </div>
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  sender: state.entities.users[ownProps.message.senderId]
})

export default connect(mSTP)(MessageItem);
