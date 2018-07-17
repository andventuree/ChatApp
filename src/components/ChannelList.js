import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { List, Label, Segment } from "semantic-ui-react";

function ChannelList(props) {
  const { channels, messages } = props;

  return (
    <Segment>
      <List selection>
        {channels.map(channel => {
          return (
            <List.Item key={channel.id}>
              <NavLink to={`/channels/${channel.id}`}>
                <List.Content>
                  {channel.name}
                  <Label circular>
                    {
                      messages.filter(message => {
                        return message.channelId === channel.id;
                      }).length
                    }
                  </Label>
                </List.Content>
              </NavLink>
            </List.Item>
          );
        })}
        <List.Item>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </List.Item>
      </List>
    </Segment>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    channels: state.channels
  };
};

export default connect(mapStateToProps)(ChannelList);
