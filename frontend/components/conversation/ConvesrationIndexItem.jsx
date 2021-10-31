import { Link } from "react-router-dom";

const ConvesrationIndexItem = ({ conversation }) => {
  return (
    <div>
      <Link to={`/@me/${conversation.id}`}>{ conversation.name }</Link>
    </div>
  )
}

export default ConvesrationIndexItem
