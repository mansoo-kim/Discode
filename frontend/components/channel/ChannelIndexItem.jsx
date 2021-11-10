import { Link } from 'react-router-dom';
import { FaHashtag } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

const ChannelIndexItem = ({ channel, isOwner, activeChannelId, toggleSettings }) => {
  return (
    <div className={`cc-index-item ${activeChannelId === channel.id ? 'active-channel' : ''}`}>
      <Link className="channel-button" to={`/channels/${channel.serverId}/${channel.id}`}>
          <div><FaHashtag size={18} /></div>
          <div>{ channel.name }</div>
      </Link>
      { isOwner && <div className="channel-settings-button" onClick={() => toggleSettings(channel.id)}><BsFillGearFill size={14} /></div>}
    </div>
  )
}

export default ChannelIndexItem
