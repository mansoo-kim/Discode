import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { REMOVE_MEMBERSHIP } from "../actions/membership_actions";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVER:
      if (!action.res.channels) return state;
      newState = Object.assign({}, state);
      for (let [id, channel] of Object.entries(action.res.channels)) {
        if (!newState[id]?.messages) newState[id] = channel;
      }
      return newState;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.res.channel.id]: action.res.channel });
    case REMOVE_CHANNEL:
      newState = Object.assign({}, state);
      delete newState[action.res.channel.id];
      return newState;
    case REMOVE_MEMBERSHIP:
      if (action.membership.joinableType !== "Server") return state;
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
    case RECEIVE_MESSAGE:
      if (action.message.messageableType !== "Channel") return state;
      newState = Object.assign({}, state);
      if (newState[action.message.messageableId].messages.includes(action.message.id)) return newState;
      newState[action.message.messageableId].messages.push(action.message.id);
      return newState;
    case REMOVE_MESSAGE:
      if (action.message.messageableType !== "Channel") return state;
      channel = Object.assign({}, state[action.message.messageableId]);
      const index = channel.messages.indexOf(action.message.id);
      channel.messages.splice(index, 1);
      return Object.assign({}, state, { [channel.id]: channel});
    default:
      return state;
  }
}

export default ChannelsReducer;
