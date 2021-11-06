import { useState } from 'react';

const MessageItem = ({ message, chat, currentUserId, sender, openModal }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [body, setBody] = useState(message.body);

  const toggleEdit = () => setShowEdit(!showEdit);

  const handleEdit = (e) => {
    e.preventDefault();
    if (body !== message.body) {
      chat.update(
        {
          id: message.id,
          body: body
        }
      );
    }
    setShowEdit(false);
  }

  const editInput = (
    <form onSubmit={handleEdit}>
      <input type="text" value={body} onChange={(e) => setBody(e.currentTarget.value)} />

      <button type="button" onClick={() => setShowEdit(false)}>cancel</button>
      <button>save</button>
    </form>
  )

  const buttons = currentUserId === sender.id ? (
    <div className="message-buttons">
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={() => openModal({type: "deleteMessage", message, sender, chat})}>Delete</button>
    </div>
  ) : null;

  return (
    <div className="message-item">
      <UserPfp user={sender} />

      <div className="message-content">
        <div className="message-body">
        { showEdit ? editInput : message.body }
        </div>
        { !showEdit && buttons }
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import UserPfp from '../user/UserPfp';

const mSTP = (state, ownProps) => ({
  sender: state.entities.users[ownProps.message.senderId]
})

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(MessageItem);
