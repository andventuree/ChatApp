import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

function AuthForm(props) {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large" onSubmit={event => handleSubmit(event)} name={name}>
          <Segment>
            <h1>Come on in, join a conversation</h1>
            <Form.Input name="username" type="text" placeholder="username" />
            <Button type="submit">{displayName}</Button>
          </Segment>
          {error && error.response && <div> {error.response.data} </div>}
        </Form>
      </Grid.Column>
    </Grid>
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
