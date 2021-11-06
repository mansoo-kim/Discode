import { Link } from "react-router-dom";
import ServerIcon from './ServerIcon';

const ServerIndexItem = ({ server }) => {
  return (
    <div>
      <Link to={`/channels/${server.id}${server.channels[0] ? `/${server.channels[0]}` : '' }`}>
        <ServerIcon name={server.name} iconUrl={server.iconUrl} />
      </Link>
    </div>
  )
}

export default ServerIndexItem
