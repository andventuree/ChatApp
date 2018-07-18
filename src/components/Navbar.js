import React from "react";
import { connect } from "react-redux";

function Navbar(props) {
  const { currentChannel } = props;
  return (
    <div className="single-channel-header ">
      <h1># {currentChannel}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentChannel: state.currentChannel
  };
};

export default connect(mapStateToProps)(Navbar);
