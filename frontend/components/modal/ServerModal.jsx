import { closeModalOnEscape } from '../../utils/close_utils';
import { FaTimes } from 'react-icons/fa';

const ServerModal = ({ closeModal, openModal }) => {

  closeModalOnEscape(closeModal);

  return (
    <div className="modal white">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>

        <div className="modal-header">
          <h2>Create or Join a Server</h2>
          <p>A server is where you and your friends hang out. Make yours or join one to start chatting.</p>
        </div>

        <div className="modal-content">

          <div className="server-modal-item" onClick={() => openModal({
            type: "createServer"
          })}>
            Create My Own
          </div>

          <div className="server-modal-item" onClick={() => openModal({
            type: "joinServer"
          })}>
            Join a Server
          </div>

        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(ServerModal);
