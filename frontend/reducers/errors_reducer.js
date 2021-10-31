import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ServerErrorsReducer from "./server_errors_reducer";
import UserErrorsReducer from "./user_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  server: ServerErrorsReducer,
  user: UserErrorsReducer
})

export default ErrorsReducer;
