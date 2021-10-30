import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../actions/server_actions";

const ServersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers
    case RECEIVE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server })
    default:
      return state;
  }
}

export default ServersReducer;
