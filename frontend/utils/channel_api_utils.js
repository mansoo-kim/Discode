export const createChannel = (serverId, channel) => (
  $.ajax({
    url: `/api/servers/${serverId}/channels`,
    method: 'POST',
    data: { channel }
  })
);
