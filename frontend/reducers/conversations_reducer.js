import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";

const ConversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      return Object.assign({}, state, { [action.res.conversation.id]: action.res.conversation });
    case RECEIVE_MESSAGE:
      if (action.message.messageableType !== "Conversation") return state;
      newState = Object.assign({}, state);
      if (newState[action.message.messageableId].messages.includes(action.message.id)) return newState;
      newState[action.message.messageableId].messages.push(action.message.id);
      return newState;
    default:
      return state;
  }
}

export default ConversationsReducer;
