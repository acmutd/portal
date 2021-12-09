import React from "react";
import Navbar from "./Navbar";
import NavbarDesktop from "./NavbarDesktop";
// import SidebarContent from "./SidebarContent";
import ContentHeader from "./ContentHeader";

const Framework = (props: any) => {
  return (
    <div className="flex flex-col h-min-screen md:flex-row justify-end">
      {/* desktop navbar */}
      <div className="hidden md:flex flex-grow border-gray-400 dark:border-gray-600 border-r w-2/12">
        <NavbarDesktop />
      </div>
      {/* main content area */}
      <div className=" flex flex-col flex-grow-0 h-full lg:max-w-xl">
        <div className="flex flex-col justify-center pb-20 w-full text-gray-900 dark:text-gray-50 md:relative">
          <div className="relative top-0 h-28 w-full"/>
          {props.content}
        </div>
        <ContentHeader/>
      </div>
      {/* sidebar area */}
      <div className="flex-grow md:border-l border-gray-400 dark:border-gray-600 w-2/12">
        <div className="hidden lg:block h-full">
          <div className="flex flex-col max-w-sm sticky top-0">{props.sidebar}</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Framework;
