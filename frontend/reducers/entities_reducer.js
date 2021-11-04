import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ServersReducer from "./servers_reducer";
import ChannelsReducer from "./channels_reducer";
import ConversationsReducer from "./conversations_reducer";
import MessagesReducer from "./messages_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  servers: ServersReducer,
  channels: ChannelsReducer,
  conversations: ConversationsReducer,
  messages: MessagesReducer
})

export default EntitiesReducer;
