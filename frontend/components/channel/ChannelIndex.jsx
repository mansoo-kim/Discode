import { useState } from 'react';
import ChannelIndexItem from './ChannelIndexItem';
import ChannelSettings from './ChannelSettings';

const ChannelIndex = ({ channels, isOwner, serverId, openModal }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [settingsId, setSettingsId] = useState(null);
  const toggleSettings = (id) => {
    setShowSettings(!showSettings)
    setSettingsId(id)
  };

  const newChannelButton = <button onClick={() =>
    openModal({type: "createChannel", serverId})}>
    New Channel
  </button>

  return (
    <div className="channel-index">
      { isOwner && newChannelButton }
      <ul>
        {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} isOwner={isOwner} toggleSettings={toggleSettings} />)}
      </ul>

      { showSettings && <ChannelSettings toggleSettings={toggleSettings} channel={channels[settingsId]} />}
    </div>
  )
}

import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(ChannelIndex);
