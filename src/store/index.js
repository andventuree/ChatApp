import { createStore, applyMiddleware, combineReducers } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import channels from "./channels";
import messages from "./messages";
import currentChannel from "./currentChannel";
import newMessage from "./newMessage";
import user from "./user";

const reducer = combineReducers({
  channels,
  messages,
  currentChannel,
  newMessage,
  user
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export default store;

export * from "./channels";
export * from "./messages";
export * from "./currentChannel";
export * from "./newMessage";
export * from "./user";
