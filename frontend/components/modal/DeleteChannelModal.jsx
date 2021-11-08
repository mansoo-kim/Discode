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

      <h2>Delete Channel</h2>
      <p>Are you sure you want to delete #{channel.name}? This cannot be undone.</p>

      <div>
        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { deleteChannel } from '../../actions/channel_actions';

const mDTP = (dispatch) => ({
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
});

export default connect(null, mDTP)(DeleteChannelModal);
