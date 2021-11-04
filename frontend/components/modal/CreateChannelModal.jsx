import { useForm } from 'react-hook-form';

const CreateChannelModal = ({ closeModal, createChannel, history }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const onSubmit = (data) => {
    const channel = {
      name: data.channelName
    };
    createChannel(channel)
      .then(({ res })=> history.push(`/channels/${res.channel.serverId}/${res.channel.id}`))
      .then(() => closeModal())
  }

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form onSubmit={handleSubmit(onSubmit)} >
        <h2>Create Text Channel</h2>

        <div>
          <label>CHANNEL NAME </label>
          <input type="text" placeholder="new-channel" {...register("channelName", { required: true })} />
        </div>

        <button type="button" onClick={closeModal}>Cancel</button>
        <button disabled={!!errors["channelName"]}>
          Create Channel
        </button>
      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';

const mDTP = (dispatch, ownProps) => ({
  closeModal: () => dispatch(closeModal()),
  createChannel: (channel) => dispatch(createChannel(ownProps.serverId, channel))
});

export default connect(null, mDTP)(CreateChannelModal);
