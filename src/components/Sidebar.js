import React from "react";
import { ChannelList } from "../components";

export default function Sidebar() {
  return (
    <div>
      <h3>
        <div>Chat App</div>
      </h3>
      <h5>Channels</h5>
      <ChannelList />
    </div>
  );
}
