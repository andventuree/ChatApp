import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { NavLink } from "react-router-dom";

function AuthForm(props) {
  const { name, displayName, handleSubmit, error } = props;
  let altPath = displayName === "Login" ? "signup" : "login";

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <form size="large" onSubmit={event => handleSubmit(event)} name={name}>
          <div className="ui segment">
            <img src="/img/Chat-App-Logo.png" />
            <div className="ui action input message-input">
              <input name="username" type="text" placeholder="username" />
              <button className="ui teal button" type="submit">
                {displayName}
              </button>
            </div>
            {error && error.response && displayName === "Login" ? (
              <div className="login-error-msg">{error.response.data}</div>
            ) : null}
          </div>
        </form>
        <div className="ui segment login">
          {displayName === "Login" ? (
            <div>
              New to us?
              <NavLink to={`/${altPath}`}> Sign Up</NavLink>
            </div>
          ) : (
            <div>
              Already have a user?
              <NavLink to={`/${altPath}`}> Login </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const formName = event.target.name; //should return login or sign up
      const username = event.target.username.value;
      dispatch(authenticate(username, formName, ownProps.history));
    }
  };
};

export const Login = connect(
  mapLogin,
  mapDispatchToProps
)(AuthForm);

export const Signup = connect(
  mapSignup,
  mapDispatchToProps
)(AuthForm);
