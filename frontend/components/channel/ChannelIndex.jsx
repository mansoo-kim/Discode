import ChannelIndexItem from './ChannelIndexItem';

const ChannelIndex = ({ channels, openModal }) => {
  return (
    <div className="channel-index">
      <button onClick={() => openModal({
        type: "createChannel"
      })}>
        New Channel
      </button>
      <ul>
        {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} />)}
      </ul>
    </div>
  )
}

import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(ChannelIndex);
