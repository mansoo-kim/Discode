import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_MESSAGE } from "../actions/message_actions";

const ConversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      return Object.assign({}, state, { [action.res.conversation.id]: action.res.conversation });
    case RECEIVE_MESSAGE:
      if (action.message.messageable_type !== "Conversation") return state;
      const newState = Object.assign({}, state);
      newState[action.message.messageable_id].messages.push(action.message.id);
      return newState;
    default:
      return state;
  }
}

export default ConversationsReducer;
