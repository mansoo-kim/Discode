import { useState } from 'react';

const NewConversationPopup = ({ top, currentUser, friends }) => {

  const [selectedFriends, setSelectedFriends] = useState({});

  const toggleFriend = (friend) => {
    console.log(friend);
    setSelectedFriends(prevState => ({...prevState, [friend.id]: friend}));
  }

  console.log(selectedFriends);

  return (
    <div className="popup-container">

      <div className="new-conversation-popup" style={{top: `${top+25}px`}}>

        <h3>Select Friends</h3>
        <p>You can add {10-Object.keys(selectedFriends).length} more friends.</p>

        <div>
          { Object.values(selectedFriends).map(friend => friend.username).join(" ") }
        </div>

        { friends.map(friend => {
          return (
            <div key={friend.id} onMouseDown={e => e.preventDefault()} onClick={() => toggleFriend(friend)}>
              {friend.username}
            </div>
          )
        })}

        <button onMouseDown={e => e.preventDefault()}>Create Group DM</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { selectStatus } from '../../reducers/selectors';

const mSTP = (state) => ({
  currentUser: state.session,
  friends: selectStatus(state, 3)
});

// const mDTP = (dispatch) => ({
//   deleteFriendship: (ids) => dispatch(deleteFriendship(ids))
// });

export default connect(mSTP)(NewConversationPopup);
