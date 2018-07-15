import { createStore, applyMiddleware, combineReducers } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import channels from "./channels";

const reducer = combineReducers({ channels });

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export default store;

export * from "./channels";
