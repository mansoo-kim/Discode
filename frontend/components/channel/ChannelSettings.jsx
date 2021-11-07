import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaHashtag, FaTimes } from 'react-icons/fa';

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
    <div className={`save-prompt ${ isDirty ? 'show-prompt' : ''} ${ showRed ? 'error-input' : ''}`}>
      Careful - you have unsaved changes!

      <div className="buttons">
        <div className="button reset" type="button" onClick={() => {
          setShowRed(false);
          reset();
        }}>
          Reset
        </div>

        <div className="button save">
          <div className="inner-save" type="button" onClick={handleSubmit(onSubmit)}>Save Changes</div>
        </div>
      </div>
    </div>
  )

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
            <input type="text" placeholder={channel.name} {...register("channelName", { required: "This field is required" })} />
            { errors.channelName?.message }
            {/* { (isDirty ) && prompt } */}
            { prompt }
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
