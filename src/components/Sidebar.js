import React from "react";
import { ChannelList } from "../components";
import { Header } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <div>
        <Header as="h1">Chat App</Header>
      </div>
      <Header as="h3">Channels</Header>
      <ChannelList />
    </div>
  );
}
