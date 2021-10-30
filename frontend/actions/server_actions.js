import * as ServerApiUtil from "../utils/server_api_utils";

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

export const receiveServers = (servers) => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receiveServer = (res) => ({
  type: RECEIVE_SERVER,
  res
});

export const requestServers = () => (dispatch) => (
  ServerApiUtil.requestServers()
    .then(
      (servers) => dispatch(receiveServers(servers))
    )
)

export const requestServer = (serverId) => (dispatch) => (
  ServerApiUtil.requestServer(serverId)
    .then(
      (res) => dispatch(receiveServer(res))
    )
)
