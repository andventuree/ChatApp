import React from "react";
import { connect } from "react-redux";

function MessageBadge(props) {
  const { messages, user, channelId } = props;
  let userLastLoginTime = new Date(user.lastLogin).getTime();

  let messageCount = messages.filter(message => {
    let messageTime = new Date(message.createdAt).getTime();

    return message.channelId === channelId && messageTime > userLastLoginTime;
  }).length;

  return (
    <React.Fragment>
      {messageCount > 0 ? (
        <div class="ui teal left pointing label">{messageCount}</div>
      ) : null}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageBadge);
