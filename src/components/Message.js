import React from "react";
import { TimeStamp } from "../components";

export default function Message(props) {
  const message = props.message;
  const isoTime = new Date(message.createdAt);
  return (
    <li>
      {message.user.username} - <TimeStamp isoTime={isoTime} />
      <span>{message.content}</span>
    </li>
  );
}

// <Image size="tiny" circular src={message.user.image} />
