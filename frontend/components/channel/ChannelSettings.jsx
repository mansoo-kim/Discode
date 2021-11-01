import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ChannelSettings = ({ toggleSettings, channel, updateChannel }) => {
  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    mode: 'onChange',
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

  const onSubmit = (data) => (
    updateChannel(channel.id, { name: data.channelName})
      .then(() => {
        setShowRed(false);
        reset({ channelName: watchName});
      })
  );

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
      <div className="settings-left">
        <div>
          # { watchName }
          <ul>
            <li>
              Overview
            </li>
            <li>
              Delete Channel
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          <h2>OVERVIEW</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label>CHANNEL NAME { errors.channelName?.message }</label>
              <input type="text" placeholder={channel.name} {...register("channelName", { required: "This field is required" })} />
            </div>

          { isDirty && prompt }
          </form>

        </div>
        <div className="close-settings">
          <button onClick={checkThenExit}>X</button>
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { updateChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.channelId]
})

const mDTP = (dispatch) => ({
  updateChannel: (channelId, channel) => dispatch(updateChannel(channelId, channel))
});

export default connect(mSTP, mDTP)(ChannelSettings);
