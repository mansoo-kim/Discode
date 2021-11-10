import * as FriendshipApiUtil from "../utils/friendship_api_utils";
import { receiveUsers } from "./user_actions";

export const RECEIVE_FRIENDSHIP = 'UPDATE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

export const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const removeFriendship = (friendship) => ({
  type: REMOVE_FRIENDSHIP,
  friendship
});

export const requestFriendships = () => (dispatch) => (
  FriendshipApiUtil.requestFriendships()
    .then(
      (users) => dispatch(receiveUsers(users))
    )
);

export const createFriendship = (ids) => (dispatch) => (
  FriendshipApiUtil.createFriendship(ids)
    .then(
      (friendship) => dispatch(receiveFriendship(friendship))
    )
);

export const updateFriendship = (ids) => (dispatch) => (
  FriendshipApiUtil.updateFriendship(ids)
    .then(
      (friendship) => dispatch(receiveFriendship(friendship))
    )
);

export const deleteFriendship = (ids) => (dispatch) => (
  FriendshipApiUtil.deleteFriendship(ids)
    .then(
      (friendship) => dispatch(removeFriendship(friendship))
    )
);
