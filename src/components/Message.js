import React from "react";
import { TimeStamp } from "../components";

export default function Message(props) {
  const message = props.message;
  const isoTime = new Date(message.createdAt);
  return (
    <li>
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <div className="ui tiny image circular">
              <img src={message.user.image} />
            </div>

            <div className="content">
              <b>{message.user.username}</b> - <TimeStamp isoTime={isoTime} />
              <div className="description">
                <p>{message.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
