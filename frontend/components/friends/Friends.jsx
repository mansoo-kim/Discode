import { useState, useEffect } from 'react';
import FriendIndex from './FriendIndex';
import PendingIndex from './PendingIndex';

const Friends = ({ requestFriendships }) => {

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

      { showAll && <FriendIndex /> }
      { !showAll && <PendingIndex /> }

    </div>
  )
}

import { connect } from 'react-redux';
import { requestFriendships } from '../../actions/friendship_actions';

const mDTP = (dispatch) => ({
  requestFriendships: () => dispatch(requestFriendships())
});

export default connect(null, mDTP)(Friends);
