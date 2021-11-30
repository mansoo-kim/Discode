import { closeModalOnEscape } from '../../utils/close_utils';
import { FaTimes } from 'react-icons/fa';

const CreateChannelModal = ({ closeModal, openModal, history }) => {

  closeModalOnEscape(closeModal);

  return (
    <div className="modal white">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>

        <div className="modal-header">
          <h2>Join a Server</h2>
          <p>Select an existing server to join.</p>
        </div>

        {/* <div className="modal-content">
          <FaHashtag size={14} />

          <label>CHANNEL NAME </label>
          <input type="text" spellCheck={false} autoFocus className="text-input channel-name" placeholder="new-channel" {...register("channelName", { required: true })} />

        </div> */}

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={() => openModal({
            type: "server"
          })}>
            Back
          </button>
          <button className="submit-button blue-button">
            <div>Join Server</div>
          </button>
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

export default connect(null, mDTP)(CreateChannelModal);
