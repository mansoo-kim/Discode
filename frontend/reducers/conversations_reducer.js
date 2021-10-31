import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION } from "../actions/conversation_actions";

const ConversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      return Object.assign({}, state, { [action.res.conversation.id]: action.res.conversation });
    default:
      return state;
  }
}

export default ConversationsReducer;
