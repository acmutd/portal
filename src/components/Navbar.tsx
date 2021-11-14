import React from "react";
import NavButton from "./NavButton";
import {
  CalendarIcon,
  NewspaperIcon,
  BriefcaseIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";

function Navbar(props: any) {
  return (
    <nav className="md:hidden pb-safe pt-1 fixed inset-x-0 bottom-0 grid grid-cols-4 justify-items-center bg-gray-200 dark:bg-gray-800 w-screen border-t border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-200">
      <NavButton href="/events" text="Events">
        <CalendarIcon className="h-8 w-8" />
      </NavButton>
      <NavButton href="/news" text="News">
        <NewspaperIcon className="h-8 w-8" />
      </NavButton>
      <NavButton href="/apply" text="Apply">
        <BriefcaseIcon className="h-8 w-8" />
      </NavButton>
      <NavButton href="/history" text="History">
        <ArchiveIcon className="h-8 w-8" />
      </NavButton>
    </nav>
  );
}
//"sm:hidden grid grid-cols-4 justify-items-center fixed bottom-0 inset-x-0 bg-gray-800 w-screen h-14 border-t border-gray-700"
export default Navbar;
