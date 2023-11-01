import React from "react";
import "./JobDisplay.css";
const convert = (t) => {
  const unixTimestamp = t;
  const date = new Date(unixTimestamp * 1000);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12

  const formattedDate = `${day}/${month}/${year} ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")} ${ampm}`;
  return formattedDate;
};

const JobDisplay = (props) => {
  return (
    <div className="display">
      <p className="title">{props.title}</p>
      <p className="by">
        By {props.by} - {convert(props.time)}
      </p>
    </div>
  );
};

export default JobDisplay;
