const NewConversationPopup = ({ top, currentUser, friends }) => {
  return (
    <div className="popup-container">

      <div className="new-conversation-popup" style={{top: `${top+25}px`}}>
        { friends.map(friend => {
          return (
            <div key={friend.id}>
              {friend.username}
            </div>
          )
        })}
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
