import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_MESSAGE } from "../actions/message_actions";

const receiveMessages = (state, action) => {
  const newState = Object.assign({}, state);
  for (let [id, message] of Object.entries(action.res.messages)) {
    newState[id] = message;
  }
  return newState;
}

const MessagesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      if (!action.res.messages) return state;
      return receiveMessages(state, action);
    case RECEIVE_CONVERSATION:
      if (!action.res.messages) return state;
      return receiveMessages(state, action);
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
}

export default MessagesReducer;
