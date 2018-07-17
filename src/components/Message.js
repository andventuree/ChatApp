import React from "react";
import { List, Image } from "semantic-ui-react";

export default function Message(props) {
  const message = props.message;

  return (
    <List.Item>
      <Image size="tiny" circular src={message.user.image} />
      <List.Content>
        <List.Header>{message.user.username}</List.Header>
        <List.Description>{message.content}</List.Description>
      </List.Content>
    </List.Item>
  );
}
