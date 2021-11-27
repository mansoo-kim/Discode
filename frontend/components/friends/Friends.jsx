import { useState, useEffect } from 'react';
import FriendIndex from './FriendIndex';
import PendingIndex from './PendingIndex';

const Friends = ({ requestFriendships }) => {

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    requestFriendships();
  }, []);

  return (
    <div className="cc-view">
      <div className="cc-header">
        <div>
          <div className="friends-label">
            <div className="cc-hash">
              <img src='https://raw.githubusercontent.com/mansoo-kim/Discode/527b97ecaea49ff7f63d222a598be98c4a924d96/app/assets/images/wave_icon.svg' />
            </div>
            Friends
          </div>

          <div className="separator">

          </div>

          <div className={`friend-nav-button ${showAll ? "active" : ""}`} onClick={() => setShowAll(true)}>All</div>
          <div className={`friend-nav-button ${showAll ? "" : "active"}`} onClick={() => setShowAll(false)}>Pending</div>
        </div>
      </div>

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
