import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const _nullSession = {
  id: null,
  name: null,
  email: null,
  tag: null,
  servers: [],
  conversations: []
}

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_USER:
      if (action.user.id === state.id) return action.user;
      return state;
    default:
      return state;
  }
}

export default SessionReducer;
