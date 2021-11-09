import * as FriendshipApiUtil from "../utils/friendship_api_utils";
import { receiveUsers } from "./user_actions";

export const requestFriendships = () => (dispatch) => (
  FriendshipApiUtil.requestFriendships()
    .then(
      (users) => dispatch(receiveUsers(users))
    )
);
