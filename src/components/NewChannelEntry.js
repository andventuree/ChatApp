import React from "react";
import { connect } from "react-redux";
import { writeChannelName, postChannel } from "../store";

function NewChannelEntry(props) {
  const { newChannelEntry, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="ui action input message-input">
        <input
          value={newChannelEntry}
          onChange={handleChange}
          type="text"
          name="channelName"
          placeholder="Name this new channel"
        />
        <button className="ui button" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    newChannelEntry: state.newChannelEntry
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: function(event) {
      dispatch(writeChannelName(event.target.value));
    },
    handleSubmit: function(event) {
      event.preventDefault();
      const name = event.target.channelName.value;
      dispatch(postChannel({ name }, ownProps.history));
      dispatch(writeChannelName(""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChannelEntry);
