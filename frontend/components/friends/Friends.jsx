import { useEffect } from 'react';

const Friends = ({ friends, outgoings, incomings, requestFriendships }) => {

  useEffect(() => {
    requestFriendships();
  }, []);

  return (
    <div>
      <h1>
        friends list
      </h1>

      <div>
        { friends.map(friend => {
          if (friend) {
            return <div key={friend.id}>{friend.username}</div>;
          }
        })}
      </div>

      <div>
        { outgoings.map(friend => {
          if (friend) {
            return <div key={friend.id}>{friend.username}</div>;
          }
        })}
      </div>

      <div>
        { incomings.map(friend => {
          if (friend) {
            return <div key={friend.id}>{friend.username}</div>;
          }
        })}
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { requestFriendships } from '../../actions/friendship_actions';
import { selectFriends, selectOutgoings, selectIncomings } from '../../reducers/selectors';

const mSTP = (state) => ({
  friends: selectFriends(state),
  outgoings: selectOutgoings(state),
  incomings: selectIncomings(state),
});

const mDTP = (dispatch) => ({
  requestFriendships: () => dispatch(requestFriendships())
});

export default connect(mSTP, mDTP)(Friends);
