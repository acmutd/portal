import React from "react";
import { CalendarIcon } from "@heroicons/react/outline";

function NavButton(props: any) {
  return (
    <a
      href={props.href}
      className="flex flex-col justify-center items-center w-full"
    >
      {props.children}
      <div className="text-xs">{props.text}</div>
    </a>
  );
}

export default NavButton;
