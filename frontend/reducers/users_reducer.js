import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    case RECEIVE_SERVER:
      const newState = Object.assign({}, state);
      for (let [id, member] of Object.entries(action.res.users)) {
        newState[id] = member;
      }
      return newState
    default:
      return state;
  }
}

export default UsersReducer;
