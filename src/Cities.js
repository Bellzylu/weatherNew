import React from "react";
import "./cityHeader.css";

export default function Cities(props) {
  return (
    <h1 className="cityHeader"> {props.cityName}</h1>
  );
}