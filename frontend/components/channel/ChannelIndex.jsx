import { useState } from 'react';
import ChannelIndexItem from './ChannelIndexItem';
import ChannelSettings from './ChannelSettings';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlinePlus } from 'react-icons/hi';

const ChannelIndex = ({ channels, isOwner, serverId, openModal }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [settingsId, setSettingsId] = useState(null);
  const toggleSettings = (id) => {
    setSettingsId(id);
    setShowSettings(!showSettings);
  };

  const newChannelButton = <div className="new-channel-button" tabIndex="0" onClick={() =>
    openModal({type: "createChannel", serverId})}>
    <HiOutlinePlus size={18} />
  </div>

  return (
    <div className="cc-index-container">
      <div className="cc-header-container">
        <div className="cc-header">
          <FaChevronDown size={8} />
          <span>
            TEXT CHANNELS
          </span>
        </div>
        { isOwner && newChannelButton }
      </div>
      <div className="cc-index">
        {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} isOwner={isOwner} toggleSettings={toggleSettings} />)}
      </div>

      { showSettings && <ChannelSettings toggleSettings={toggleSettings} channelId={settingsId} />}
    </div>
  )
}

import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(ChannelIndex);
