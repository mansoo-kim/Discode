import { useState, useEffect } from 'react';
import ConversationIndexItem from "./ConversationIndexItem";
import NewConversationPopup from './NewConversationPopup';
import { HiOutlinePlus } from 'react-icons/hi';

const ConversationIndex = ({ conversations, membersById, currentUser, requestConversations }) => {

  useEffect(() => {
    requestConversations();
  }, [])

  const [showPopup, setShowPopup] = useState(false);
  const [popupTop, setPopupTop] = useState(0);

  const togglePopup = (e) => {
    setPopupTop(e.currentTarget.getBoundingClientRect().top)
    setShowPopup(!showPopup);
  };

  return (
    <div className="cc-index-container">
      <div className="cc-index-header-container">
        <div className="cc-index-header">
          <span>
            DIRECT MESSAGES
          </span>
        </div>
        <div className="new-cc-button" onClick={togglePopup} >
          <HiOutlinePlus size={18} />
        </div>
        { showPopup && <NewConversationPopup top={popupTop} conversations={conversations} setShowPopup={setShowPopup} /> }
      </div>

      <div className="cc-index">
        {conversations.map(conversation => <ConversationIndexItem key={conversation.id} conversation={conversation} members={membersById[conversation.id]} currentUser={currentUser} />)}
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { requestConversations } from '../../actions/conversation_actions';
import { selectMembersByConversation } from '../../reducers/selectors';

const mSTP = (state) => ({
  conversations: Object.values(state.entities.conversations),
  membersById: selectMembersByConversation(state),
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  requestConversations: () => dispatch(requestConversations())
});

export default connect(mSTP, mDTP)(ConversationIndex);
