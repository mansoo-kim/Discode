import FriendIndexItem from "./FriendIndexItem"

const FriendIndex = ({ currentUser, friends, deleteFriendship }) => {

  const handleDelete = (friendId) => {
    deleteFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  return (
    <div>
      { friends.map(friend => <FriendIndexItem key={friend.id} friend={friend} action1={() => null} action2={handleDelete} />)}
    </div>
  )
}

import { connect } from 'react-redux';
import { deleteFriendship } from "../../actions/friendship_actions";
import { selectStatus } from '../../reducers/selectors';

const mSTP = (state) => ({
  currentUser: state.session,
  friends: selectStatus(state, 3)
});

const mDTP = (dispatch) => ({
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids))
});

export default connect(mSTP, mDTP)(FriendIndex);
