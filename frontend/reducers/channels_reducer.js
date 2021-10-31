import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER:
      return action.res.channels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    default:
      return state;
  }
}

export default ChannelsReducer;
