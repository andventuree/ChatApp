import React from "react";
import { connect } from "react-redux";
import { ChannelList, LogOut } from "../components";

function Sidebar(props) {
  const { user } = props;
  return (
    <div className="ui segment">
      <div className="sidebar-header box">
        <h1>
          <i className="quote left icon" />
          Chat App
          <i className="quote right icon" />
        </h1>
      </div>
      <ChannelList />
      <LogOut />
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Sidebar);
