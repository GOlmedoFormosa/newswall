import { combineReducers } from "redux";
import MessagesReducer from "./messages/reducer";

const rootReducer = combineReducers({
  messages: MessagesReducer,
});

export default rootReducer;
