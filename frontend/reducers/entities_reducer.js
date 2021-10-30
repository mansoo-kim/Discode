import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ServersReducer from "./servers_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  servers: ServersReducer
})

export default EntitiesReducer;
