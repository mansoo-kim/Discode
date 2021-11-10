import { useState, useEffect } from 'react';
import ConversationIndexItem from "./ConversationIndexItem";
import NewConversationPopup from './NewConversationPopup';
import { HiOutlinePlus } from 'react-icons/hi';

const ConversationIndex = ({ conversations, requestConversations }) => {

  useEffect(() => {
    requestConversations();
  }, [])

  const [showPopup, setShowPopup] = useState(false);
  const [popupTop, setPopupTop] = useState(0);

  const togglePopup = (e) => {
    setPopupTop(e.currentTarget.getBoundingClientRect().top)
    setShowPopup(!showPopup);
  };

  const handleEscapeExit = (e) => {
    if (e.keyCode === 27) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
   document.addEventListener("keydown", handleEscapeExit);
   return () => document.removeEventListener("keydown", handleEscapeExit);
  }, []);

  return (
    <div className="cc-index-container">
      <div className="cc-index-header-container">
        <div className="cc-index-header">
          <span>
            DIRECT MESSAGES
          </span>
        </div>
        <div className="new-cc-button" tabIndex="0" onClick={togglePopup} onBlur={() => setShowPopup(false)}>
          <HiOutlinePlus size={18} />
        </div>
        { showPopup && <NewConversationPopup top={popupTop} conversations={conversations} setShowPopup={setShowPopup} /> }
      </div>

      <div className="cc-index">
        {conversations.map(conversation => <ConversationIndexItem key={conversation.id} conversation={conversation} />)}
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { requestConversations } from '../../actions/conversation_actions';

const mSTP = (state) => ({
  conversations: Object.values(state.entities.conversations)
});

const mDTP = (dispatch) => ({
  requestConversations: () => dispatch(requestConversations())
});

export default connect(mSTP, mDTP)(ConversationIndex);
