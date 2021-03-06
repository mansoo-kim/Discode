import FriendIndexItem from "./FriendIndexItem";

const PendingIndex = ({ currentUser, incomings, outgoings, updateFriendship, deleteFriendship }) => {

  const handleUpdate = (friend) => {
    updateFriendship({
      user_id: currentUser.id,
      friend_id: friend.id
    });
  };

  const handleDelete = (friend) => {
    deleteFriendship({
      user_id: currentUser.id,
      friend_id: friend.id
    });
  };

  return (
    <div className="friend-index-container">
      <div className="friend-index">
        <div className="all-friends">
          PENDING - {incomings.length + outgoings.length}
        </div>
        { incomings.map(friend => <FriendIndexItem key={friend.id} friend={friend} action1={handleUpdate} action2={handleDelete} subtext={"Incoming Friend Request"} />)}
        { outgoings.map(friend => <FriendIndexItem key={friend.id} friend={friend} action2={handleDelete} subtext={"Outgoing Friend Request"} />)}
      </div>
    </div>
  )
}
import { connect } from 'react-redux';
import { updateFriendship, deleteFriendship } from "../../actions/friendship_actions";
import { selectStatus } from '../../reducers/selectors';

const mSTP = (state) => ({
  currentUser: state.session,
  outgoings: selectStatus(state, 1),
  incomings: selectStatus(state, 2)
});

const mDTP = (dispatch) => ({
  updateFriendship: (ids) => dispatch(updateFriendship(ids)),
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids))
});

export default connect(mSTP, mDTP)(PendingIndex);
