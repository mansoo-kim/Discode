import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { REMOVE_SERVER } from "../actions/server_actions";
import { REMOVE_MEMBERSHIP } from "../actions/membership_actions";
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";

const _nullSession = {
  id: null,
  username: null,
  email: null,
  tag: null,
  servers: [],
  conversations: [],
  friends: [],
  outgoings: [],
  incomings: []
}

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState;
  let index;
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
        newState = Object.assign({}, state);
        newState.servers.push(action.res.server.id);
        return newState
      }
      return state;
    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      index = newState.servers.indexOf(action.res.server.id);
      newState.servers.splice(index, 1);
      return newState;
    case REMOVE_MEMBERSHIP:
      if (action.membership.joinableType !== "Server") return state;
      newState = Object.assign({}, state);
      index = newState.servers.indexOf(action.membership.id);
      newState.servers.splice(index, 1);
      return newState;
    case RECEIVE_FRIENDSHIP:
      console.log(action);
      newState = Object.assign({}, state);
      if (action.friendship.status === 2) {
        index = newState.incomings.indexOf(action.friendship.friendId);
        newState.incomings.splice(index, 1);
        newState.friends.push(action.friendship.friendId);
      } else {
        newState.outgoings.push(action.friendship.friendId);
      }
      return newState;
    case REMOVE_FRIENDSHIP:
      console.log(action);
      newState = Object.assign({}, state);
      if (action.friendship.status === 2) {
        index = newState.friends.indexOf(action.friendship.friendId);
        newState.friends.splice(index, 1);
      } else if (action.friendship.status === 1) {
        index = newState.incomings.indexOf(action.friendship.friendId);
        newState.incomings.splice(index, 1);
      } else {
        index = newState.outgoings.indexOf(action.friendship.friendId);
        newState.outgoings.splice(index, 1);
      }
      return newState;
    default:
      return state;
  }
}

export default SessionReducer;
