import { useForm } from 'react-hook-form';

const ChannelSettings = ({ toggleSettings, channel, updateChannel }) => {
  const { register, formState: { errors, dirtyFields }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: { channelName: channel.name }
  });

  const onSubmit = (data) => (
    updateChannel(channel.id, { name: data.channelName})
  );

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
              <label>CHANNEL NAME</label>
              <input type="text" placeholder={channel.name} {...register("channelName", { required: true })} />
            </div>

          </form>

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
