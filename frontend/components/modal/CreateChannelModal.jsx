import { useForm } from 'react-hook-form';

const CreateChannelModal = ({ closeModal, createChannel }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const onSubmit = (data) => {
    const channel = {
      name: data.channelName
    };
    createChannel(channel)
      .then(
        () => closeModal())
  }

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <h2>Create Text Channel</h2>

      <label>CHANNEL NAME
        <input type="text" placeholder="new-channel" {...register("channelName", { required: true })} />
      </label>

      <button onClick={handleSubmit(onSubmit)} disabled={!!errors["channelName"]}>
        Create Channel
      </button>
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
