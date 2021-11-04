const MessageItem = ({ message }) => {
  return (
    <li>

    </li>
  )
}

import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  sender: state.entities.users[ownProps.message.senderId]
})

export default connect(mSTP)(MessageItem);
