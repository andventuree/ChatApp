import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChannels, fetchMessages } from "../store";
import { Switch, Route, Redirect } from "react-router-dom";
import { Sidebar, Navbar, MessageList } from "../components";

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllChannels();
    this.props.fetchAllMessages();
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Booger} />
            <Route
              path="/dogs/:variable"
              render={({ match }) => {
                console.log("match: ", match);
                return <div>{match.params.message}asdfasdfs</div>;
              }}
            />
            <Route path="/channels/:channelId" component={MessageList} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}

// const User = ({ match }) => {
//   return <h1>Hello {match.params.username}!</h1>;
// };

//removed <Switch> b/c it only shows 1 component at a time,
function Booger() {
  return <div>xyz</div>;
}

function Pooper(props) {
  console.log(props);
  return <div>xahhhhhh</div>;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
