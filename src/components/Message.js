import React from "react";
import { TimeStamp } from "../components";

export default function Message(props) {
  const { message, user } = props;
  let newMessageColor = "";
  const isoTime = new Date(message.createdAt);
  let userLastLoginTime = new Date(user.lastLogin);
  if (isoTime.getTime() > userLastLoginTime.getTime()) {
    newMessageColor = "teal";
  }

  return (
    <li>
      <div className={`ui ${newMessageColor} message`}>
        <div className="ui items">
          <div className="item">
            <div className="ui tiny image circular">
              <img src={message.user.image} />
            </div>

            <div className="content">
              <b>{message.user.username}</b> - <TimeStamp isoTime={isoTime} />
              <p className="message-bubble">{message.content}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
