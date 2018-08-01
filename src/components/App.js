import React, { Component } from "react";
import { me } from "../store";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { Main, Login, Signup } from "../components";

class App extends Component {
  componentDidMount() {
    this.props.checkUser();
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log("isLoggedIn: ", isLoggedIn);
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {isLoggedIn && <Route path="/" component={Main} />}
        </Switch>
      </div>
    );
  }
}

// <Redirect to="/login" />

const mapStateToProps = state => {
  return {
    //coerce user obj to bool
    isLoggedIn: !!state.user.id
    //will initially return false to begin with b/c loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUser: function() {
      dispatch(me());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
