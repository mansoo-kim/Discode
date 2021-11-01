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
      .then(({ channel })=> history.push(`/channels/${channel.serverId}/${channel.id}`))
      .then(() => closeModal())
  }

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form onSubmit={handleSubmit(onSubmit)} >
        <h2>Create Text Channel</h2>

        <label>CHANNEL NAME
          <input type="text" placeholder="new-channel" {...register("channelName", { required: true })} />
        </label>

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
