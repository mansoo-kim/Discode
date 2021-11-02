import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const ServersReducer = (state = {}, action) => {
  Object.freeze(state);
  let server;
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return Object.assign({}, state, { [action.res.server.id]: action.res.server });
    case RECEIVE_CHANNEL:
      server = Object.assign({}, state[action.channel.serverId]);
      server.channels.push(action.channel.id);
      return Object.assign({}, state, { [server.id]: server });
    case REMOVE_CHANNEL:
      server = Object.assign({}, state[action.channel.serverId]);
      const index = server.channels.indexOf(action.channel.id);
      server.channels.slice(index, 1);
      return Object.assign({}, state, { [server.id]: server });
    default:
      return state;
  }
}

export default ServersReducer;
