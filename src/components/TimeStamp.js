import React from "react";

export default function TimeStamp(props) {
  const { isoTime } = props;
  let hours = isoTime.getHours() + 1;
  let minutes = isoTime.getMinutes() + 1;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let partOfDay = "AM";

  if (hours === 24) {
    // 12 AM
    hours = 12;
  } else if (hours >= 12) {
    if (hours > 12) hours % 12; //anytime in the afternoon
    partOfDay = "PM";
  }

  return <em className="date">{`${hours}:${minutes} ${partOfDay}`}</em>;
}
