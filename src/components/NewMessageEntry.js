import React from "react";
import { connect } from "react-redux";
import { writeMessage, postMessage } from "../store";

function NewMessageEntry(props) {
  const { name, newMessageEntry, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={event => handleSubmit(name, newMessageEntry, event)}>
      <div>
        <input
          type="text"
          name="content"
          value={newMessageEntry}
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
    name: state.name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange(event) {
      dispatch(writeMessage(event.target.value));
    },
    handleSubmit(name, content, event) {
      //i think we use user name
      event.preventDefault();
      const { channelId } = ownProps;
      dispatch(postMessage({ name, content, channelId }));
      dispatch(writeMessage(""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageEntry);
