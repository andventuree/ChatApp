import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChannels, fetchMessages } from "../store";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { Sidebar, Navbar, MessageList, NewChannelEntry } from "../components";

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllChannels();
    this.props.fetchAllMessages();
  }

  render() {
    return (
      <div className="app-layout ">
        <Sidebar />
        <main className="ui segment">
          <Navbar />
          <Switch>
            <Route path="/new-channel" component={NewChannelEntry} />
            <Route path="/channels/:channelId" component={MessageList} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels,
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllChannels: () => {
      return dispatch(fetchChannels());
    },
    fetchAllMessages: () => {
      return dispatch(fetchMessages());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
