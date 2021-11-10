import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CONVERSATION, RECEIVE_CONVERSATIONS } from "../actions/conversation_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";

const receiveUsers = (state, members) => {
  if (!members) return state;
  const newState = Object.assign({}, state);
  for (let [id, member] of Object.entries(members)) {
    newState[id] = member;
  }
  return newState;
}

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let user;
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_SERVER:
      return receiveUsers(state, action.res.members);
    case RECEIVE_CONVERSATION:
      return receiveUsers(state, action.res.members);
    case RECEIVE_CONVERSATIONS:
      return receiveUsers(state, action.res.members);
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      return receiveUsers(state, action.users);
    case RECEIVE_FRIENDSHIP:
      newState = Object.assign({}, state);
      user = newState[action.friendship.friendId];
      user.status = action.friendship.status;
      return newState;
    case REMOVE_FRIENDSHIP:
      newState = Object.assign({}, state);
      user = newState[action.friendship.friendId];
      user.status = 0;
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;
