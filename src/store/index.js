import { createStore, applyMiddleware, combineReducers } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import channels from "./channels";
import messages from "./messages";
import currentChannel from "./currentChannel";

const reducer = combineReducers({ channels, messages, currentChannel });

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export default store;

export * from "./channels";
export * from "./messages";
export * from "./currentChannel";
