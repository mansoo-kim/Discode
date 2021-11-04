import { Link } from "react-router-dom";

const ConvesrationIndexItem = ({ conversation }) => {
  return (
    <li>
      <Link to={`/channels/@me/${conversation.id}`}>{ conversation.name }</Link>
    </li>
  )
}

export default ConvesrationIndexItem
