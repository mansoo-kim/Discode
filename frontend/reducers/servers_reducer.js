import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { REMOVE_MEMBERSHIP } from "../actions/membership_actions";

const ServersReducer = (state = {}, action) => {
  Object.freeze(state);
  let server;
  let newState;
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return Object.assign({}, state, { [action.res.server.id]: action.res.server });
    case RECEIVE_CHANNEL:
      server = Object.assign({}, state[action.res.channel.serverId]);
      if (!server.channels.includes(action.res.channel.id)) server.channels.push(action.res.channel.id);
      return Object.assign({}, state, { [server.id]: server });
    case REMOVE_CHANNEL:
      server = Object.assign({}, state[action.res.channel.serverId]);
      const index = server.channels.indexOf(action.res.channel.id);
      server.channels.splice(index, 1);
      return Object.assign({}, state, { [server.id]: server });
    case REMOVE_MEMBERSHIP:
      if (action.membership.joinableType !== "Server") return state;
      newState = Object.assign({}, state);
      delete newState[action.membership.joinableId]
      return newState;
    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      delete newState[action.res.server.id];
      return newState;
    default:
      return state;
  }
}

export default ServersReducer;
