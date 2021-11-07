import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaHashtag } from 'react-icons/fa';

const ChannelSettings = ({ toggleSettings, channel, updateChannel, openModal }) => {
  if (!channel) return null;

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { channelName: channel.name }
  });

  const [showRed, setShowRed] = useState(false);
  const watchName = watch("channelName");

  const checkThenExit = () => {
    if (isDirty) {
      setShowRed(true);
    } else {
      toggleSettings(null);
    }
  }

  const onSubmit = (data) => {
    const formData = { name: data.channelName};

    updateChannel(channel.id, formData)
      .then(() => {
        setShowRed(false);
        reset({ channelName: watchName});
      },
      () => {})
  };

  const prompt = (
    <div className={`save-prompt ${ showRed ? 'error-input' : ''}`}>
      Careful - you have unsaved changes!
      <button onClick={() => {
        setShowRed(false);
        reset();
      }}>
        Reset
      </button>
      <button>Save Changes</button>
    </div>
  )

  return (
    <div className="settings-container">
      <div className="settings-left-container">
        <div className="settings-left">
          <div className="options-header">
              <FaHashtag size={12} /> { watchName.toUpperCase() }

              <span>TEXT CHANNELS</span>
          </div>
          <div className="option selected">
              Overview
          </div>

          <div className="separator"></div>

          <div className="option action" onClick={() => openModal({type: "deleteChannel", channel})}>
            Delete Channel
          </div>
        </div>
      </div>
      <div className="settings-right-container">
        <div className="settings-pane">
          <h2>OVERVIEW</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>CHANNEL NAME</label>
              <input type="text" placeholder={channel.name} {...register("channelName", { required: "This field is required" })} />
              { errors.channelName?.message }
            </div>
            { (isDirty ) && prompt }
          </form>
        </div>
      </div>

      <div className="close-settings">
        <button onClick={checkThenExit}>X</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateChannel } from '../../actions/channel_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.channelId],
})

const mDTP = (dispatch) => ({
  updateChannel: (channelId, channel) => dispatch(updateChannel(channelId, channel)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(ChannelSettings));
