import React from "react";
import { ChannelList } from "../components";

export default function Sidebar() {
  return (
    <div className="channels box">
      Channels
      <ChannelList />
    </div>
  );
}
