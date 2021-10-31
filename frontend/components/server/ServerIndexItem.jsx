import { Link } from "react-router-dom";

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      <Link to={`/channels/${server.id}/${server.channels[0]}`}>{ server.name }</Link>
    </li>
  )
}

export default ServerIndexItem
