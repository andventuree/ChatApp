import React from "react";
import { connect } from "react-redux";
import { LogOut } from "../components";

function Navbar(props) {
  const { currentChannel } = props;
  return (
    <div className="header box">
      {currentChannel}
      <LogOut />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentChannel: state.currentChannel
  };
};

export default connect(mapStateToProps)(Navbar);
