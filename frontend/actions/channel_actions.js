import * as ChannelApiUtil from "../utils/channel_api_utils";

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receiveChannel = (res) => ({
  type: RECEIVE_CHANNEL,
  res
});

export const createChannel = (channel) => (dispatch) => (
  ChannelApiUtil.createChannel(channel)
    .then(
      (channel) => dispatch(receiveChannel(channel))
    )
)
