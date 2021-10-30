import { RECEIVE_SERVER } from "../actions/server_actions";

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER:
      return action.res.channels;
    default:
      return state;
  }
}

export default ChannelsReducer;
