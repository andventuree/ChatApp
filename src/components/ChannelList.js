import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { MessageBadge } from "../components";

function ChannelList(props) {
  const { channels } = props;

  return (
    <div className="channels-body">
      <h3 className="menu-header">Channels</h3>
      <ul className="channel-list">
        {channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`}>
                <div>
                  # {channel.name}
                  <MessageBadge channelId={channel.id} />
                </div>
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    </div>
  );
}
// <div className="ui vertical menu">
const mapStateToProps = state => {
  return {
    channels: state.channels
  };
};

export default connect(mapStateToProps)(ChannelList);
