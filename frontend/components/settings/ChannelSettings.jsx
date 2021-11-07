import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaHashtag, FaTimes } from 'react-icons/fa';
import Prompt from './Prompt';

const ChannelSettings = ({ toggleSettings, channel, updateChannel, openModal }) => {
  if (!channel) return null;

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { channelName: channel.name }
  });

  const darkBackground = 'rgba(32, 34, 37, 0.9)';
  const redBackground = '#F14846';
  const [promptBackground, setPromptBackground] = useState(darkBackground);
  const watchName = watch("channelName");

  useEffect(() => {
    if (promptBackground === redBackground) setTimeout(() => setPromptBackground(darkBackground), 500);
  }, [promptBackground]);

  const checkThenExit = () => {
    if (isDirty) {
      setPromptBackground(redBackground);
    } else {
      toggleSettings(channel.id);
    }
  }

  const onSubmit = (data) => {
    const formData = { name: data.channelName};

    updateChannel(channel.id, formData)
      .then(() => {
        reset({ channelName: watchName});
      },
      () => {})
  };

  return (
    <div className="settings-container">
      <div className="settings-left-container">
        <div className="settings-options">
          <div className="options-header">
              <FaHashtag size={12} />&nbsp;{ watchName.toUpperCase() }

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

          <div className="fake-form">
            <label>CHANNEL NAME</label>

            <input type="text" autoFocus className={`${errors.channelName ? 'show-errors' : ''}`} placeholder={channel.name} {...register("channelName", { required: "This field is required" })} />

            { errors.channelName && <div className="error-message">{ errors.channelName?.message }</div> }

            <Prompt promptBackground={promptBackground} isDirty={isDirty} reset={reset} handleSubmit={handleSubmit(onSubmit)} />
          </div>
        </div>

        <div className="close-settings">
          <div className="close-circle" onClick={checkThenExit}>
            <FaTimes size={16} />
          </div>
          ESC
        </div>
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
