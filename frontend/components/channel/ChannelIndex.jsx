import ChannelIndexItem from './ChannelIndexItem';

const ChannelIndex = ({ channels, isOwner, serverId, openModal }) => {
  const newChannelButton = <button onClick={() =>
    openModal({type: "createChannel", serverId})}>
    New Channel
  </button>

  return (
    <div className="channel-index">
      { isOwner && newChannelButton }
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
