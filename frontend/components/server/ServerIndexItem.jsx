import { Link } from "react-router-dom";

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      <Link to={`/channels/${server.id}/${server.channels[0]}`}>
        <img src={server.iconUrl} className="server-icon" />
        { server.name }
      </Link>
    </li>
  )
}

export default ServerIndexItem
