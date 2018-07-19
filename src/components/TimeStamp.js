import React from "react";

export default function TimeStamp(props) {
  const { isoTime } = props;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[isoTime.getMonth()];
  let hours = isoTime.getHours();
  let minutes = isoTime.getMinutes();
  let day = isoTime.getDate();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let partOfDay = "AM";

  if (hours === 24 || hours === 0) {
    // 12 AM
    hours = 12;
  } else if (hours >= 12) {
    hours = hours > 12 ? hours % 12 : hours; //anytime in the afternoon
    partOfDay = "PM";
  }

  return (
    <em className="date">{`${month} ${day} @ ${hours}:${minutes} ${partOfDay}`}</em>
  );
}
