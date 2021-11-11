import { useState, useEffect } from 'react';
import FriendIndex from './FriendIndex';
import PendingIndex from './PendingIndex';

const Friends = ({ requestFriendships }) => {

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    requestFriendships();
  }, []);

  return (
    <div className="friends-container">
      <nav className="friends-nav">
        <div>

          Frends
        </div>

        <div className="friend-nav-button" onClick={() => setShowAll(true)}>All</div>
        <div className="friend-nav-button" onClick={() => setShowAll(false)}>Pending</div>
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
