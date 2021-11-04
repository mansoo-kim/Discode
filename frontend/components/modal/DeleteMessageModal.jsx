const DeleteMessageModal = ({ message, imgSrc, chat, closeModal }) => {

  const handleDelete = () => {
    chat.delete(
      message
    );
    closeModal();
  }

  return (
    <div className="modal">

      <h2>Delete Message</h2>
      <p>Are you sure you want to delete this message?</p>

      <div className="message-item">
        <div className="message-pfp">
          <img src={imgSrc} className="pfp" />
        </div>

        <div className="message-content">
          <div className="message-body">
          { message.body }
          </div>
        </div>
      </div>

      <div>
        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mDTP)(DeleteMessageModal);
