import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";

const ConversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let conversation;
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.res.conversations;
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
    default:
      return state;
  }
}

export default ConversationsReducer;
