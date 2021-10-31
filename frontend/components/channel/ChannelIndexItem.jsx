import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => {
  return (
    <li>
      <Link to={`/channels/${channel.serverId}/${channel.id}`}>{ channel.name }</Link>
    </li>
  )
}

export default ChannelIndexItem
