import UserPfp from '../user/UserPfp';

const DeleteMessageModal = ({ message, sender, chat, closeModal }) => {

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
        <UserPfp user={sender} />

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

export default DeleteMessageModal;
