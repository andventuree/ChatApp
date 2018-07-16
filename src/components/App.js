import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Login, Signup } from "../components";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}
