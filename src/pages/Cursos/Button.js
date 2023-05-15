import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.content}
    </button>
  );
};

export default Button;

