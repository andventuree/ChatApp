import React from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { LogOut } from "../components";

function Navbar(props) {
  const { currentChannel } = props;
  return (
    <nav>
      <Header as="h1">{currentChannel}</Header>
      <LogOut />
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    currentChannel: state.currentChannel
  };
};

export default connect(mapStateToProps)(Navbar);
