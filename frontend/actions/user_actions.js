import * as UserApiUtil from '../utils/user_api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RESET_USER_ERRORS = "RESET_USER_ERRORS"

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const resetUserErrors = () => ({
  type: RESET_USER_ERRORS
});

export const requestUser = (userId) => (dispatch) => (
  UserApiUtil.requestUser(userId)
    .then(
      (user) => dispatch(receiveUser(user))
    )
);

export const updateUser = (userId, user) => (dispatch) => (
  UserApiUtil.updateUser(userId, user)
    .then(
      (user) => dispatch(receiveUser(user)),
      (res) => dispatch(receiveUserErrors(res.responseJSON))
    )
);
