import { useForm } from 'react-hook-form';

const ChannelSettings = ({ toggleSettings, channel, updateChannel }) => {
  const { register, formState: { errors, isDirty, dirtyFields }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: { channelName: channel.name }
  });

  const onSubmit = (data) => (
    updateChannel(channel.id, { name: data.channelName})
  );

  console.log(isDirty);

  const prompt = (
    <div className="save-prompt">
      Careful - you have unsaved changes!
      <button>Reset</button>
      <button>Save Changes</button>
    </div>
  )

  return (
    <div className="settings-container">
      <div className="settings-left">
        <div>
          # {channel.name}
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

          </form>

          { isDirty && prompt }

        </div>
        <div className="close-settings">
          <button onClick={toggleSettings}>X</button>
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { updateChannel } from '../../actions/channel_actions';

const mDTP = (dispatch) => ({
  updateChannel: (channelId, channel) => dispatch(updateChannel(channelId, channel))
})

export default connect(null, mDTP)(ChannelSettings);
