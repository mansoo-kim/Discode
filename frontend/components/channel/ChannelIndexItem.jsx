import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel, isOwner, toggleSettings }) => {
  return (
    <li>
      <Link to={`/channels/${channel.serverId}/${channel.id}`}>
          { channel.name }
      </Link>
      { isOwner && <button onClick={() => toggleSettings(channel.id)}>Settings</button>}
    </li>
  )
}

export default ChannelIndexItem
