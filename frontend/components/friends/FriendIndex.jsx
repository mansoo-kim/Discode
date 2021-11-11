import FriendIndexItem from "./FriendIndexItem"

const FriendIndex = ({ currentUser, friends, conversations, deleteFriendship, createConversation, history }) => {

  const handleDelete = (friendId) => {
    deleteFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleConversationStart = (friendId) => {
    const groupIds = [currentUser.id, friendId].sort((a,b) => a-b);
    for (let conversation of conversations) {
      if (arrayEquals(conversation.members.sort((a,b) => a-b), groupIds)) {
        if (history.location.pathname !== `/channels/@me/${conversation.id}`) history.push(`/channels/@me/${conversation.id}`);
        return;
      }
    }
    createConversation({member_ids: groupIds})
      .then(({ res })=> history.push(`/channels/@me/${res.conversation.id}`))
  }

  return (
    <div className="friend-index-container">
      <div className="friend-index">
        <div className="all-friends">
          ALL FRIENDS - {friends.length}
        </div>
        { friends.map(friend => <FriendIndexItem key={friend.id} friend={friend} action1={handleConversationStart} action2={handleDelete} />)}
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriendship } from "../../actions/friendship_actions";
import { selectStatus } from '../../reducers/selectors';
import { createConversation } from "../../actions/conversation_actions";

const mSTP = (state) => ({
  currentUser: state.session,
  friends: selectStatus(state, 3),
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
  createConversation: (conversation) => dispatch(createConversation(conversation))
});

export default withRouter(connect(mSTP, mDTP)(FriendIndex));
