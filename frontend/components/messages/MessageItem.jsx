import { useState } from 'react';

const MessageItem = ({ message, sender, currentUserId }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [body, setBody] = useState(message.body);

  const toggleEdit = () => setShowEdit(!showEdit);

  const imgSrc = sender.pfpUrl || 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'

  const editInput = (
    <form>
      <input type="text" value={body} onChange={(e) => setBody(e.currentTarget.value)} />
    </form>
  )

  return (
    <div className="message-item">
      <div className="message-pfp">
        <img src={imgSrc} className="pfp" />
      </div>
      { showEdit ? editInput : message.body }
      { currentUserId === sender.id && <button onClick={toggleEdit}>Edit</button>}
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  sender: state.entities.users[ownProps.message.senderId]
})

export default connect(mSTP)(MessageItem);
