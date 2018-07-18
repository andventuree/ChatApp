import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function ChannelList(props) {
  const { channels, messages } = props;

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
                  <div class="ui teal left pointing label">
                    {
                      messages.filter(message => {
                        return message.channelId === channel.id;
                      }).length
                    }
                  </div>
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
    messages: state.messages,
    channels: state.channels
  };
};

export default connect(mapStateToProps)(ChannelList);
