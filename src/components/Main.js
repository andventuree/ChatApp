import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChannels } from "../store";

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllChannels();
  }

  render() {
    console.log(this.props);
    return (
      <div className="ui inverted segment">
        <div>Plain text </div>
        {this.props.channels &&
          this.props.channels.map(channel => {
            return (
              <div>
                <a># {channel.name}</a>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllChannels: function() {
      return dispatch(fetchChannels());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
