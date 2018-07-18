import React from "react";

export default function TimeStamp(props) {
  const { isoTime } = props;
  let hours = isoTime.getHours() + 1;
  let minutes = isoTime.getMinutes() + 1;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let afternoon = hours > 12 ? "PM" : "AM";
  hours = hours % 12;

  return <em className="date">{`${hours}:${minutes} ${afternoon}`}</em>;
}
