import React from "react";
import { connect } from "react-redux";

function Navbar(props) {
  const { currentChannel } = props;
  console.log("currentChannel: ", currentChannel);
  return (
    <nav>
      <h3>
        {currentChannel === "" ? "Not in a channel" : currentChannel} space
      </h3>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    currentChannel: state.currentChannel
  };
};

export default connect(mapStateToProps)(Navbar);
