import React from "react";
import { connect } from "react-redux";
import { writeMessage, postMessage } from "../store";

function NewMessageEntry(props) {
  const { username, newMessage, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={event => handleSubmit(username, newMessage, event)}>
      <div className="ui action input message-input">
        <input
          type="text"
          name="content"
          value={newMessage}
          onChange={handleChange}
          placeholder="Friendly message goes here..."
          width={15}
        />
        <button className="ui button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    newMessage: state.newMessage,
    username: state.user.username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: function(event) {
      dispatch(writeMessage(event.target.value));
    },
    handleSubmit: function(username, content, event) {
      event.preventDefault();
      const { channelId } = ownProps;
      dispatch(postMessage({ username, content, channelId }));
      dispatch(writeMessage(""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageEntry);
