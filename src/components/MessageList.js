import React, { Component } from "react";
import { connect } from "react-redux";
import { Message, NewMessageEntry } from "../components";
import { changeCurrentChannel } from "../store";

class MessageList extends Component {
  componentDidMount() {
    this.props.changeChannel(this.props.channel.name);
  }

  componentWillReceiveProps(nextProps) {
    //this should update the view to be a different channel
    if (nextProps.channel.name !== this.props.channel.name) {
      this.props.changeChannel(nextProps.channel.name);
    }
  }

  render() {
    const { channelId, messages } = this.props;
    return (
      <React.Fragment>
        <div className="messages-body">
          <ul className="message-list">
            {messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
          </ul>
        </div>
        <NewMessageEntry channelId={channelId} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  const channelId = Number(ownProps.match.params.channelId);
  return {
    channel: state.channels.find(channel => channel.id === channelId) || {
      name: ""
    },
    messages: state.messages.filter(message => message.channelId === channelId),
    channelId,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeChannel: function(channelName) {
      dispatch(changeCurrentChannel(channelName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
