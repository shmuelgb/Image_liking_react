import React from "react";
import "./counter.css";
import bad from "./images/bad.png";
import good from "./images/good.png";

export default function Counter(props) {
  const getIcon = () => {
    if (props.type === "likes") {
      return (
        <figure
          className={props.type}
          style={{ backgroundImage: `url(${good})` }}
        ></figure>
      );
    } else {
      return (
        <figure
          className={props.type}
          style={{ backgroundImage: `url(${bad})` }}
        ></figure>
      );
    }
  };
  return (
    <div className={`counter`}>
      <div>{props.value}</div>
      {getIcon()}
    </div>
  );
}
