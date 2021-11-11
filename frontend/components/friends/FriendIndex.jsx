import FriendIndexItem from "./FriendIndexItem"

const FriendIndex = ({ currentUser, friends, conversations, createConversation, history, openModal }) => {

  const handleRemove = (friend) => {
    openModal({type: "removeFriend", currentUserId: currentUser.id, friend})
  }

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleConversationStart = (friend) => {
    const groupIds = [currentUser.id, friend.id].sort((a,b) => a-b);
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
        { friends.map(friend => <FriendIndexItem key={friend.id} friend={friend} action1={handleConversationStart} action2={handleRemove} openModal={openModal} />)}
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectStatus } from '../../reducers/selectors';
import { createConversation } from '../../actions/conversation_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUser: state.session,
  friends: selectStatus(state, 3),
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  createConversation: (conversation) => dispatch(createConversation(conversation)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(FriendIndex));
