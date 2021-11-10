import MemberIndexItem from "./MemberIndexItem";

const MemberIndex = ({ currentUser, members, createFriendship, deleteFriendship }) => {

  const handleCreate = (friendId) => {
    createFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  const handleDelete = (friendId) => {
    deleteFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  return (
    <div className="member-index-container">
      <div className="members-index-header">
        MEMBERS - { members.length }
      </div>
      <div className="members-index">
        {members.map(member => {
          const isFriend = currentUser.friends.includes(member.id);
          return <MemberIndexItem key={member.id} member={member} action={ isFriend ? handleDelete : handleCreate } isFriend={isFriend} />
        })}
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { selectMembers } from '../../reducers/selectors';
import { createFriendship, deleteFriendship } from "../../actions/friendship_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.session,
  members: selectMembers(state, ownProps.type, ownProps.id)
});

const mDTP = (dispatch) => ({
  createFriendship: (ids) => dispatch(createFriendship(ids)),
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids))
});

export default connect(mSTP, mDTP)(MemberIndex);
