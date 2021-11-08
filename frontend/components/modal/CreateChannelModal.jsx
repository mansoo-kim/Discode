import { useForm } from 'react-hook-form';
import { FaHashtag, FaTimes } from 'react-icons/fa';

const CreateChannelModal = ({ closeModal, createChannel, history }) => {
  const { register, watch, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: { channelName: "" }
  });

  const channelName = watch("channelName");

  const onSubmit = (data) => {
    const channel = {
      name: data.channelName
    };
    createChannel(channel)
      .then(({ res })=> history.push(`/channels/${res.channel.serverId}/${res.channel.id}`))
      .then(() => closeModal());
  }

  return (
    <div className="modal">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        <h2>Create Text Channel</h2>

        <div className="modal-content">
          <FaHashtag size={14} />

          <label>CHANNEL NAME </label>
          <input type="text" className="text-input channel-name" placeholder="new-channel" {...register("channelName", { required: true })} />

        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button blue-button" disabled={channelName === ""}>
            <div>Create Channel</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';

const mDTP = (dispatch, ownProps) => ({
  createChannel: (channel) => dispatch(createChannel(ownProps.serverId, channel))
});

export default connect(null, mDTP)(CreateChannelModal);
