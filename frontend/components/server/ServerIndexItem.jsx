import { Link } from "react-router-dom";

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      <Link to={`/channels/${server.id}/1`}>{ server.name }</Link>
    </li>
  )
}

export default ServerIndexItem
