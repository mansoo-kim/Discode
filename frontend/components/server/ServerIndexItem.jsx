import { Link } from "react-router-dom";
import ServerIcon from './ServerIcon';

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      <Link to={`/channels/${server.id}/${server.channels[0]}`}>
      <ServerIcon server={server} />
        { server.name }
      </Link>
    </li>
  )
}

export default ServerIndexItem
