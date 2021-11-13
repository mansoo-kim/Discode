import { useState, useRef } from 'react';
import { closeOnEscape, closeOnOutsideClick } from '../../utils/close_utils';
import SelectFriendItem from './SelectFriendItem';

const NewConversationPopup = ({ top, conversations, setShowPopup, currentUser, friends, createConversation, history}) => {

  const inputRef = useRef();
  const popupRef = useRef();

  closeOnOutsideClick(popupRef, setShowPopup);
  closeOnEscape(setShowPopup);

  const [selectedFriends, setSelectedFriends] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
  const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);

  const toggleFriend = (friend) => {
    const idx = findIfSelected(friend);
    if (idx > -1) {
      setSelectedFriends(prevState => {
        const newState = [...prevState]
        newState.splice(idx, 1);
        return newState;
      });
    } else {
      setSelectedFriends(prevState => [...prevState, friend]);
      setSearchText("");
    }
  }

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleCreate = () => {
    const groupIds = [currentUser.id, ...selectedFriends.map(friend => parseInt(friend.id))].sort((a,b) => a-b);
    for (let conversation of conversations) {
      if (arrayEquals(conversation.members.sort((a,b) => a-b), groupIds)) {
        if (history.location.pathname !== `/channels/@me/${conversation.id}`) history.push(`/channels/@me/${conversation.id}`);
        setShowPopup(false);
        return;
      }
    }
    createConversation({member_ids: groupIds})
      .then(({ res })=> history.push(`/channels/@me/${res.conversation.id}`))
      .then(() => setShowPopup(false));
  }

  const count = selectedFriends.length;

  return (
    <div className="popup-container">
      <div className="new-convo-popup" style={{top: `${top+22}px`}} ref={popupRef}>

        <div className="new-convo-top">
          <h2>Select Friends</h2>

          { count <= 8 ? <p>You can add {9-count} more friends.</p> : <p className={`${count > 9 ? "show-error" : ""}`}>This group has a 10 member limit.</p>}

          <div className="search-bar-container">

            { selectedFriends.map(friend => {
                return (
                  <div className="selected-friend" key={friend.id}>
                    {friend.username}
                  </div>
                )
            })}

            <input className="search-input" autoFocus ref={inputRef} spellCheck={false}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.currentTarget.value)}
              placeholder={"Type the username of a friend"}
              />
          </div>
        </div>

        <div className="select-friend-index">
          { friends.map(friend => {
            if (friend.username.includes(searchText)) {
              return <SelectFriendItem key={friend.id} friend={friend} inputRef={inputRef} toggleFriend={toggleFriend} isSelected={isSelected(friend)}  />
            }
            return null;
          })}
        </div>

        <button className="create-convo-button" onClick={handleCreate} disabled={count > 9 || count === 0}><div>Create Group DM</div></button>
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
