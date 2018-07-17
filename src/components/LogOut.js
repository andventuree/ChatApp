import React from "react";
import { connect } from "react-redux";
import { logout } from "../store";

function LogOut(props) {
  const { user, handleClick } = props;
  return (
    <button onClick={() => handleClick(user)}>Log out {user.username}</button>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: function(user) {
      dispatch(logout(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
