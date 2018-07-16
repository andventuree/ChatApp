import React, { Component } from "react";
import { connect } from "react-redux";
import store, { fetchChannels, fetchMessages } from "../store";
import { Switch, Route, Redirect } from "react-router-dom";
import { Sidebar, Navbar, MessageList } from "../components";

export default class Main extends Component {
  componentDidMount() {
    const messagesThunk = fetchMessages();
    const channelsThunk = fetchChannels();
    store.dispatch(messagesThunk);
    store.dispatch(channelsThunk);
    // this.props.fetchAllChannels();
    // this.props.fetchAllMessages();
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/channels/:channelId" component={MessageList} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     channels: state.channels,
//     messages: state.messages
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAllChannels: () => {
//       return dispatch(fetchChannels());
//     },
//     fetchAllMessages: () => {
//       return dispatch(fetchMessages());
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Main);
