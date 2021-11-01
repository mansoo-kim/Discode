import * as ChannelApiUtil from '../utils/channel_api_utils';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const createChannel = (serverId, channel) => (dispatch) => (
  ChannelApiUtil.createChannel(serverId, channel)
    .then(
      (channel) => dispatch(receiveChannel(channel))
    )
);

export const updateChannel = (channelId, channel) => (dispatch) => (
  ChannelApiUtil.updateChannel(channelId, channel)
    .then(
      (channel) => dispatch(receiveChannel(channel))
    )
);
