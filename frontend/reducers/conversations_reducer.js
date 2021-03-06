import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const ConversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let conversation;
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      if (!action.res.conversations) return state;
      newState = Object.assign({}, state);
      for (let [id, conversation] of Object.entries(action.res.conversations)) {
        if (!newState[id]) {
          newState[id] = conversation;
        } else {
          newState[id] = Object.assign({}, conversation, { messages: newState[id].messages})
        }
      }
      return newState;
    case RECEIVE_CONVERSATION:
      return Object.assign({}, state, { [action.res.conversation.id]: action.res.conversation });
    case RECEIVE_MESSAGE:
      if (action.message.messageableType !== "Conversation") return state;
      newState = Object.assign({}, state);
      if (newState[action.message.messageableId].messages.includes(action.message.id)) return newState;
      newState[action.message.messageableId].messages.push(action.message.id);
      return newState;
    case REMOVE_MESSAGE:
      if (action.message.messageableType !== "Conversation") return state;
      conversation = Object.assign({}, state[action.message.messageableId]);
      const index = conversation.messages.indexOf(action.message.id);
      conversation.messages.splice(index, 1);
      return Object.assign({}, state, { [conversation.id]: conversation});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default ConversationsReducer;
