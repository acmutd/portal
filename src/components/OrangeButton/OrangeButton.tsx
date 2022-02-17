import React from "react";
import "./OrangeButton.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  redirectURL?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <a
      className="orange-button"
      onClick={props.onClick}
      href={props.redirectURL}
    >
      {props.text}
    </a>
  );
};

export default Button;
