import { useState, useEffect, useRef } from 'react';
import { closeOnEscape } from '../../utils/close_utils';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaPen } from 'react-icons/fa';

const MessageItem = ({ message, chat, currentUserId, sameSender, sameDate, sender, openModal }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [body, setBody] = useState(message.body);
  const editRef = useRef(null);

  const openEdit = () => {
    setShowEdit(true);
  }

  useEffect(() => {
    if (showEdit) {
      editRef.current.focus();
    }
  })

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
  };

  const closeEdit = bool => {
    setShowEdit(bool);
    setBody(message.body);
  }

  closeOnEscape(closeEdit);

  const editInput = (
    <form onSubmit={handleEdit} className="message-form edit">
      <input type="text" spellCheck={false} value={body} ref={editRef} onChange={(e) => setBody(e.currentTarget.value)} />

      <div>
        escape to <span onClick={() => closeEdit(false)}>cancel</span> &#8226; enter to <span onClick={handleEdit}>save</span>
      </div>
    </form>
  )

  const buttons = currentUserId === sender.id ? (
    <div className="message-buttons">
      <div onClick={openEdit}>
        <FaPen size={14} />
      </div>
      <div onClick={() => openModal({type: "deleteMessage", message, sender, chat})}>
        <RiDeleteBin5Fill size={16} />
      </div>
    </div>
  ) : null;

  const messageBody = () => {
    if (sameSender && sameDate) {
      return (
        <>
          <div></div>
          <div className="message-text">
            <div>
              { showEdit ? editInput : message.body }
            </div>
          </div>
        </>
      )
    } else {
      const date = new Date(message.createdAt);
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const hour = date.getHours() % 12;
      const timestamp = date.toLocaleDateString() === today.toLocaleDateString() ? `Today at ${hour === 0 ? 12: hour}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() > 11 ? "PM" : "AM"}` : date.toLocaleDateString() === yesterday.toLocaleDateString() ? `Yesterday at ${hour === 0 ? 12: hour}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() > 11 ? "PM" : "AM"}` : date.toLocaleDateString();

      return (
        <>
          <div className="message-pfp"><UserPfp user={sender} /></div>
          <div className="message-text">
            <div className="sender-username">
              { sender.username } <span className="timestamp">{ timestamp }</span>
            </div>
            <div>
              { showEdit ? editInput : message.body }
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <div className={`message-item ${(sameSender && sameDate) ? '' : 'first-message'}`}>
      <div className="message-body">
        { messageBody() }
      </div>
      { !showEdit && buttons }
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
