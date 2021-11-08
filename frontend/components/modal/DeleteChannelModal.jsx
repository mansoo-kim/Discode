const DeleteChannelModal = ({ channel, deleteChannel, closeModal, history }) => {

  const handleDelete = () => {
    deleteChannel(channel.id)
    .then(() => {
      if (history.location.pathname !== `/channels/${channel.serverId}`) history.push(`/channels/${channel.serverId}`)
    })
    .then(() => closeModal());
  }

  return (
    <div className="modal">
      <form onSubmit={handleDelete}>

        <div className="modal-content">
          <h2>Delete Channel</h2>
          <p>Are you sure you want to delete <span>#{channel.name}</span>? This cannot be undone.</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="red-button">
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
