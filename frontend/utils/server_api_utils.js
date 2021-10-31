export const requestServers = () => (
  $.ajax({
    url: `/api/servers`,
    method: 'GET'
  })
);

export const requestServer = (serverId) => (
  $.ajax({
    url: `/api/servers/${serverId}`,
    method: 'GET'
  })
);

export const createServer = (server) => (
  $.ajax({
    url: `/api/servers`,
    method: 'POST',
    data: { server }
  })
);
