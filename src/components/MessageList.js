import React, { Component } from "react";
import { connect } from "react-redux";
import { Message, NewMessageEntry } from "../components";
import { changeCurrentChannel } from "../store";

class MessageList extends Component {
  componentDidMount() {
    // console.log("this.props: ", this.props);
    this.props.changeChannel(this.props.channel.name);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
    if (nextProps.channel.name !== this.props.channel.name) {
      this.props.changeChannel(nextProps.channel.name);
    }
  }

  render() {
    const { channelId, messages } = this.props;
    return (
      <div>
        <ul>
          <div>Plain text</div>
          {messages.map(message => {
            return <Message key={message.id} message={message} />;
          })}
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
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
    channelId
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
