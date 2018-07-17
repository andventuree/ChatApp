import React from "react";
import { connect } from "react-redux";
import { writeMessage, postMessage } from "../store";

function NewMessageEntry(props) {
  const { username, newMessage, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={event => handleSubmit(username, newMessage, event)}>
      <div>
        <input
          type="text"
          name="content"
          value={newMessage}
          onChange={handleChange}
          placeholder="Type..."
        />
        <span>
          <button type="submit">send icon</button>
        </span>
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
