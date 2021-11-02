import * as ServerApiUtil from "../utils/server_api_utils";

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const RESET_SERVER_ERRORS = 'RESET_SERVER_ERRORS';
export const REMOVE_SERVER = 'REMOVE_SERVER';


export const receiveServers = (servers) => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receiveServer = (res) => ({
  type: RECEIVE_SERVER,
  res
});

export const receiveServerErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const resetServerErrors = () => ({
  type: RESET_SERVER_ERRORS
});

export const removeServer = (res) => ({
  type: REMOVE_SERVER,
  res
});

export const requestServers = () => (dispatch) => (
  ServerApiUtil.requestServers()
    .then(
      (servers) => dispatch(receiveServers(servers))
    )
);

export const requestServer = (serverId) => (dispatch) => (
  ServerApiUtil.requestServer(serverId)
    .then(
      (res) => dispatch(receiveServer(res))
    )
);

export const createServer = (server) => (dispatch) => (
  ServerApiUtil.createServer(server)
    .then(
      (server) => dispatch(receiveServer(server)),
      (res) => dispatch(receiveServerErrors(res.responseJSON))
    )
);

export const updateServer = (serverId, server) => (dispatch) => (
  ServerApiUtil.updateServer(serverId, server)
    .then(
      (server) => dispatch(receiveServer(server)),
      (res) => dispatch(receiveServerErrors(res.responseJSON))
    )
);

export const deleteServer = (serverId) => (dispatch) => (
  ServerApiUtil.deleteServer(serverId)
    .then(
      (server) => dispatch(removeServer(server))
    )
);
