import { Link } from 'react-router-dom';
import { RiHashtag } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';

const ChannelIndexItem = ({ channel, isOwner, toggleSettings }) => {
  return (
    <div className="cc-index-item">
      <Link className="channel-button" to={`/channels/${channel.serverId}/${channel.id}`}>
          <div><RiHashtag size={20} /></div>
          <div>{ channel.name }</div>
      </Link>
      { isOwner && <div className="new-channel-button" tabIndex="0" onClick={() => toggleSettings(channel.id)}><BsFillGearFill size={12} /></div>}
    </div>
  )
}

export default ChannelIndexItem
