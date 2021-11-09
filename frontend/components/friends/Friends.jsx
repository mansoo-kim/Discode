import { useState, useEffect } from 'react';
import FriendIndex from './FriendIndex';
import PendingIndex from './PendingIndex';

const Friends = ({ friends, outgoings, incomings, requestFriendships }) => {

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    requestFriendships();
  }, []);

  return (
    <div>

      <nav>
        <div onClick={() => setShowAll(true)}>All</div>
        <div onClick={() => setShowAll(false)}>Pending</div>
      </nav>

      { showAll && <FriendIndex friends={friends} /> }
      { !showAll && <PendingIndex incomings={incomings} outgoings={outgoings} /> }

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
