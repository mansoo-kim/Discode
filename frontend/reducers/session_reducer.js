import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";

const _nullSession = {
  id: null,
  username: null,
  email: null,
  tag: null,
  servers: [],
  conversations: [],
  friends: [],
  outgoing: [],
  incoming: []
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
    case RECEIVE_SERVER:
      if (action.res.server.ownerId === state.id && !state.servers.includes(action.res.server.id)) {
        const newState = Object.assign({}, state);
        newState.servers.push(action.res.server.id);
        return newState
      }
      return state;
    default:
      return state;
  }
}

export default SessionReducer;
