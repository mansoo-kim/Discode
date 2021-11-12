import { closeModalOnEscape } from '../../utils/close_utils';

const DeleteChannelModal = ({ channel, deleteChannel, closeModal, history }) => {

  closeModalOnEscape(closeModal);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteChannel(channel.id)
      .then(() => {
        if (history.location.pathname !== `/channels/${channel.serverId}`) history.push(`/channels/${channel.serverId}`)
      })
      .then(() => closeModal());
  }

  return (
    <div className="modal">
      <form onSubmit={handleDelete}>
        <h2>Delete Channel</h2>

        <div className="modal-content">
          <p>Are you sure you want to delete <span>#{channel.name}</span>? This cannot be undone.</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button red-button">
            <div>Delete Channel</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { deleteChannel } from '../../actions/channel_actions';

const mDTP = (dispatch) => ({
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
});

export default connect(null, mDTP)(DeleteChannelModal);
