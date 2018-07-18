import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function ChannelList(props) {
  const { channels, messages } = props;

  return (
    <div>
      <ul className="box">
        {channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`}>
                <div>
                  {channel.name}
                  <span>
                    {
                      messages.filter(message => {
                        return message.channelId === channel.id;
                      }).length
                    }
                  </span>
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

const mapStateToProps = state => {
  return {
    messages: state.messages,
    channels: state.channels
  };
};

export default connect(mapStateToProps)(ChannelList);
