import { RECEIVE_USER, RECEIVE_USER_ERRORS, RESET_USER_ERRORS  } from "../actions/user_actions";

const UserErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return {};
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RESET_USER_ERRORS:
      return {};
    default:
      return state;
  }
}

export default UserErrorsReducer;
