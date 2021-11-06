import { useState, useEffect, useRef } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaPen } from 'react-icons/fa';

const MessageItem = ({ message, chat, currentUserId, sameSender, sender, openModal }) => {
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

  const handleEscapeExit = (e) => {
    if (e.keyCode === 27) {
      setShowEdit(false);
    }
  };

  const editInput = (
    <form onSubmit={handleEdit} className="message-form edit">
      <input type="text" value={body} ref={editRef} onChange={(e) => setBody(e.currentTarget.value)} onKeyDown={handleEscapeExit} />

      <div>
        escape to <span onClick={() => setShowEdit(false)}>cancel</span> enter to <span onClick={handleEdit}>save</span>
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

  const messageBody = sameSender ? (
    <>
      <div></div>
      <div className="message-text">
        <div>
          { showEdit ? editInput : message.body }
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="message-pfp"><UserPfp user={sender} /></div>
      <div className="message-text">
        <div className="sender-username">
          { sender.username }
        </div>
        <div>
          { showEdit ? editInput : message.body }
        </div>
      </div>
    </>
  )

  return (
    <div className={`message-item ${sameSender ? '' : 'first-message'}`}>
      <div className="message-body">
        { messageBody }
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
