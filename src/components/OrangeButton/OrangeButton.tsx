import React from "react";
import "./OrangeButton.css";

interface ButtonProps {
  text: string;
  /**
   * @deprecated Use redirectURL instead.
   */
  onClick?: () => void;
  redirectURL?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <a className="orange-button" href={props.redirectURL}>
      {props.text}
    </a>
  );
};

export default Button;
