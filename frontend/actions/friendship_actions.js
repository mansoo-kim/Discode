import * as FriendshipApiUtil from "../utils/friendship_api_utils";
import { receiveUsers } from "./user_actions";

export const CREATE_FRIENDSHIP = 'CREATE_FRIENDSHIP';
export const UPDATE_FRIENDSHIP = 'UPDATE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

export const requestFriendships = () => (dispatch) => (
  FriendshipApiUtil.requestFriendships()
    .then(
      (users) => dispatch(receiveUsers(users))
    )
);

export const createFriendship = (ids) => (dispatch) => (
  FriendshipApiUtil.createFriendship(ids)
    .then(
      (users) => dispatch(receiveUsers(users))
    )
);

export const updateFriendship = (ids) => (dispatch) => (
  FriendshipApiUtil.updateFriendship(ids)
    .then(
      (users) => dispatch(receiveUsers(users))
    )
);

export const deleteFriendship = (ids) => (dispatch) => (
  FriendshipApiUtil.deleteFriendship(ids)
    .then(
      (users) => dispatch(receiveUsers(users))
    )
);
