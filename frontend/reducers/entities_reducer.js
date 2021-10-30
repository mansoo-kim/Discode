import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ServersReducer from "./servers_reducer";
import ChannelsReducer from "./channels_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  servers: ServersReducer,
  channels: ChannelsReducer
})

export default EntitiesReducer;
