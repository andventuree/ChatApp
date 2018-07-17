import React from "react";
import { List, Image } from "semantic-ui-react";
import { TimeStamp } from "../components";

export default function Message(props) {
  const message = props.message;
  const isoTime = new Date(message.createdAt);
  return (
    <List.Item>
      <Image size="tiny" circular src={message.user.image} />
      <List.Content>
        <h2>{message.user.username}</h2> <TimeStamp isoTime={isoTime} />
        <div>
          <List.Description>{message.content}</List.Description>
        </div>
      </List.Content>
    </List.Item>
  );
}
