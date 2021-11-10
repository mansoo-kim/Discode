import { useState, useEffect, useRef } from 'react';

const NewConversationPopup = ({ top, conversations, setShowPopup, currentUser, friends, createConversation, history}) => {

  const popupRef = useRef();

  const checkOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
   document.addEventListener("mousedown", checkOutside);
   return () => document.removeEventListener("mousedown", checkOutside);
  }, []);

  const [selectedFriends, setSelectedFriends] = useState({});
  const [searchText, setSearchText] = useState("");

  const toggleFriend = (friend) => {
    if (selectedFriends[friend.id]) {
      setSelectedFriends(prevState => {
        const newState = { ...prevState}
        delete newState[friend.id];
        return newState;
      });
    } else {
      setSelectedFriends(prevState => ({...prevState, [friend.id]: friend}));
    }
  }

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleCreate = () => {
    console.log(selectedFriends);
    const groupIds = [currentUser.id, ...Object.keys(selectedFriends)].map(id => parseInt(id)).sort((a,b) => a-b);
    for (let conversation of conversations) {
      if (arrayEquals(conversation.members, groupIds)) {
        if (history.location.pathname !== `/channels/@me/${conversation.id}`) history.push(`/channels/@me/${conversation.id}`);
        setShowPopup(false);
        return;
      }
    }
    createConversation({member_ids: groupIds})
      .then(({ res })=> history.push(`/channels/@me/${res.conversation.id}`))
      .then(() => setShowPopup(false));
  }

  const count = Object.keys(selectedFriends).length;

  return (
    <div className="popup-container">
      <div className="new-conversation-popup" style={{top: `${top+25}px`}} ref={popupRef}>
        <h3>Select Friends</h3>

        { count <= 8 ? <p>You can add {9-count} more friends.</p> : <p>This group has a 10 member limit.</p>}

        <div>
          {/* { Object.values(selectedFriends).map(friend => <div>{friend.username}</div>) } */}
          {/* <input type="text" className="friend-search-bar" autoFocus /> */}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            placeholder={"Type the username of a friend"}
          />
        </div>

        { friends.map(friend => {
          return (
            <div key={friend.id} onClick={() => toggleFriend(friend)}>
              {friend.username}
            </div>
          )
        })}

        <button onClick={handleCreate} disabled={count > 9}>Create Group DM</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectStatus } from '../../reducers/selectors';
import { createConversation } from '../../actions/conversation_actions';

const mSTP = (state) => ({
  currentUser: state.session,
  friends: selectStatus(state, 3)
});

const mDTP = (dispatch) => ({
  createConversation: (conversation) => dispatch(createConversation(conversation))
});

export default withRouter(connect(mSTP, mDTP)(NewConversationPopup));
