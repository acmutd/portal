import React from "react";
import Navbar from "./Navbar";
import NavbarDesktop from "./NavbarDesktop";
import SidebarContent from "./SidebarContent";

function Framework(props: any) {
  return (
    <div className="h-min-screen flex flex-col sm:flex-row justify-end">
      <div className="hidden md:flex flex-grow border-gray-400 dark:border-gray-600 border-r">
        <NavbarDesktop />
      </div>
      <div className=" flex flex-col h-full flex-grow-0 max-w-xl">
        {props.content}
      </div>
      <div className="flex-grow md:border-l border-gray-400 dark:border-gray-600">
        <div className="hidden lg:block">
          <div className="flex flex-col max-w-sm">{props.sidebar}</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Framework;
