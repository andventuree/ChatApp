import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import { Main } from "./components";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("app")
);
