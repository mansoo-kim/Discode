export const createChannel = (serverId, channel) => (
  $.ajax({
    url: `/api/servers/${serverId}/channels`,
    method: 'POST',
    data: { channel }
  })
);

export const updateChannel = (channelId, channel) => (
  $.ajax({
    url: `/api/channels/${channelId}`,
    method: 'PATCH',
    data: { channel }
  })
);

export const deleteChannel = (channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}`,
    method: 'DELETE'
  })
);

export const requestChannel = (channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}`,
    method: 'GET'
  })
);
