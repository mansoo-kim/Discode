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
      <form onSubmit={handleDelete}>
        <h2>Delete Message</h2>

        <div className="modal-content">
          <p>Are you sure you want to delete this message?</p>

          <div className="to-delete-container">
            <div className="message-pfp">
              <UserPfp user={sender} />
            </div>

            <div className="message-text">
              <div className="sender-username">
                { sender.username }
              </div>
              <div>
                {  message.body }
              </div>
            </div>
          </div>

        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button red-button">
            <div>Delete</div>
          </button>
        </div>

      </form>
    </div>
  )
}

export default DeleteMessageModal;
