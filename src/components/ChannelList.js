import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

function ChannelList(props) {
  const { channels, messages } = props;

  return (
    <ul>
      {channels.map(channel => {
        return (
          <li key={channel.id}>
            <NavLink to={`/channels/${channel.id}`}>
              <span>{channel.name}</span>
              <span>
                {
                  messages.filter(message => {
                    return message.channelId === channel.id;
                  }).length
                }
              </span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    channels: state.channels
  };
};

export default withRouter(connect(mapStateToProps)(ChannelList));
