import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER:
      return action.res.channels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL:
      const newState = Object.assign({}, state);
      delete newState[action.channelId];
      return newState;
    default:
      return state;
  }
}

export default ChannelsReducer;
