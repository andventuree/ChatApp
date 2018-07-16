import React from "react";

export default function Message(props) {
  const message = props.message;

  return (
    <li>
      <h4>{message.userId}</h4>
      {message.content}
    </li>
  );
}
