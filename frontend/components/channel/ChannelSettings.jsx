import { useForm } from 'react-hook-form';

const ChannelSettings = ({ toggleSettings, channel }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

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

          <form>

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

const mDTP = (dispatch) => ({

})

export default connect(null, mDTP)(ChannelSettings);
