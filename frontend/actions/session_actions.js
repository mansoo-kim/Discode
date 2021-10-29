import * as SessionApiUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const registerNewUser = (formUser) => (dispatch) => (
  SessionApiUtil.register(formUser)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (res) => dispatch(receiveSessionErrors(res.responseJSON))
    )
)

export const login = (formUser) => (dispatch) => (
  SessionApiUtil.login(formUser)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (res) => dispatch(receiveSessionErrors(res.responseJSON))
    )
)

export const logout = () => (dispatch) => (
  SessionApiUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      (res) => dispatch(receiveSessionErrors(res.responseJSON))
    )
)
