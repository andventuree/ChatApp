import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChannels, fetchMessages } from "../store";
import { Sidebar, Navbar, MessageList } from "../components";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllChannels();
    this.props.fetchAllMessages();
  }

  render() {
    return (
      <Segment>
        <Grid columns={2} stackable>
          <Grid.Column width={3}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Navbar />
            <main>
              <Switch>
                <Route path="/channels/:channelId" component={MessageList} />
                <Redirect to="/channels/1" />
              </Switch>
            </main>
          </Grid.Column>
        </Grid>
      </Segment>
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
