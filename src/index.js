import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div> Starting component </div>
  </Router>,
  document.getElementById("app")
);
