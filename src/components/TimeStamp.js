import React from "react";

export default function TimeStamp(props) {
  const { isoTime } = props;
  let hours = isoTime.getHours() + 1;
  let minutes = isoTime.getMinutes() + 1;
  let afternoon = hours > 12 ? "PM" : "AM";
  hours = hours % 12;

  return <span className="date">{`${hours}:${minutes} ${afternoon}`}</span>;
}
