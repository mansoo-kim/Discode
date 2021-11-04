import * as ChannelApiUtil from '../utils/channel_api_utils';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const receiveChannel = (res) => ({
  type: RECEIVE_CHANNEL,
  res
});

export const removeChannel = (channel) => ({
  type: REMOVE_CHANNEL,
  channel
});

export const createChannel = (serverId, channel) => (dispatch) => (
  ChannelApiUtil.createChannel(serverId, channel)
    .then(
      (res) => dispatch(receiveChannel(res))
    )
);

export const updateChannel = (channelId, channel) => (dispatch) => (
  ChannelApiUtil.updateChannel(channelId, channel)
    .then(
      (res) => dispatch(receiveChannel(res))
    )
);

export const deleteChannel = (channelId) => (dispatch) => (
  ChannelApiUtil.deleteChannel(channelId)
    .then(
      (channel) => dispatch(removeChannel(channel))
    )
);

export const requestChannel = (channelId) => (dispatch) => (
  ChannelApiUtil.requestChannel(channelId)
    .then(
      (res) => dispatch(receiveChannel(res))
    )
);
