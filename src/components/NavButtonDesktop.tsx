import React from "react";

function NavButtonDesktop(props: any) {
  return (
    <a
      href={props.href}
      className="flex items-center text-gray-900 dark:text-white mx-4 my-2 p-4 text-2xl gap-6 min-w-10"
    >
      {props.children}
      <div className="hidden xl:block text-left p-2">{props.text}</div>
    </a>
  );
}

export default NavButtonDesktop;
