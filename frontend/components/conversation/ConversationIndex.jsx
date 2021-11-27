import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConversationIndexItem from "./ConversationIndexItem";
import NewConversationPopup from './NewConversationPopup';
import { HiOutlinePlus } from 'react-icons/hi';

const ConversationIndex = ({ match, conversations, membersById, currentUser, requestConversations }) => {

  useEffect(() => {
    requestConversations();
  }, [])

  const [showPopup, setShowPopup] = useState(false);
  const [popupTop, setPopupTop] = useState(0);

  const togglePopup = (e) => {
    setPopupTop(e.currentTarget.getBoundingClientRect().top)
    setShowPopup(!showPopup);
  };

  const activeConversationId = parseInt(match.params.conversationId)

  return (
    <div className="cc-index-container">
      <Link className={`friends-link ${match.url === "/channels/@me" ? "active" : ""}`} to='/channels/@me'>
        <img src='https://raw.githubusercontent.com/mansoo-kim/Discode/527b97ecaea49ff7f63d222a598be98c4a924d96/app/assets/images/wave_icon.svg' />
        Friends
      </Link>

      <div className="cc-index-header-container">
        <div className="cc-index-header conversation">
          <span>
            DIRECT MESSAGES
          </span>
        </div>
        <div className="new-cc-button new-conversation" onClick={togglePopup} >
          <HiOutlinePlus size={16} />
        </div>
      </div>

      <div className="cc-index">
        {conversations.map(conversation => <ConversationIndexItem key={conversation.id} activeConversationId={activeConversationId} conversation={conversation} members={membersById[conversation.id]} currentUser={currentUser} />)}
      </div>

      { showPopup && <NewConversationPopup top={popupTop} conversations={conversations} setShowPopup={setShowPopup} /> }
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
