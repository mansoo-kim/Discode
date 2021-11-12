import { Link } from "react-router-dom";
import ServerIcon from './ServerIcon';

const ServerIndexItem = ({ server, activeServerId }) => {
  return (
    <div className={`server-index-item ${activeServerId === server.id ? 'active-server' : ''}`}>
      <Link to={`/channels/${server.id}${server.channels[0] ? `/${server.channels[0]}` : '' }`}>
        <ServerIcon name={server.name} iconUrl={server.iconUrl} />
      </Link>

      <div className="server-name-popup">
        { server.name }
      </div>
      <div className="server-hover-triangle"></div>
    </div>
  )
}

export default ServerIndexItem
