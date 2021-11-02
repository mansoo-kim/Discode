import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { REMOVE_MEMBERSHIP } from "../actions/membership_actions";

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVER:
      if (!action.res.channels) return state;
      newState = Object.assign({}, state);
      for (let [id, channel] of Object.entries(action.res.channels)) {
        newState[id] = channel;
      }
      return newState;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL:
      newState = Object.assign({}, state);
      delete newState[action.channel.id];
      return newState;
    case REMOVE_MEMBERSHIP:
      newState = Object.assign({}, state);
      for (let [k,v] of Object.entries(newState)) {
        if (v.serverId === action.membership.joinableId) delete newState[k];
      }
      return newState;
    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      for (let [k,v] of Object.entries(newState)) {
        if (v.serverId === action.res.server.id) delete newState[k];
      }
      return newState;
    default:
      return state;
  }
}

export default ChannelsReducer;
