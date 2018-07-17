import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

function AuthForm(props) {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)} name={name}>
        <div>
          <label>Username</label>
          <input name="username" type="text" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
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
