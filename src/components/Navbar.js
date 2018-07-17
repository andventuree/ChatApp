import React from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";

function Navbar(props) {
  const { currentChannel } = props;
  return (
    <nav>
      <Header as="h1">
        {currentChannel === "" ? "Not in a channel" : currentChannel}
      </Header>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    currentChannel: state.currentChannel
  };
};

export default connect(mapStateToProps)(Navbar);
