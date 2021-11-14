import React from "react";
import {
  CalendarIcon,
  NewspaperIcon,
  BriefcaseIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";
import NavButtonDesktop from "./NavButtonDesktop";

function NavbarDesktop(props: any) {
  return (
    <div className="sm:flex flex-col  items-end h-full w-full ">
      <nav>
        <NavButtonDesktop href="/events" text="Events">
          <CalendarIcon className="h-12 w-12" />
        </NavButtonDesktop>
        <NavButtonDesktop href="/news" text="News">
          <NewspaperIcon className="h-12 w-12" />
        </NavButtonDesktop>
        <NavButtonDesktop href="/apply" text="Apply">
          <BriefcaseIcon className="h-12 w-12" />
        </NavButtonDesktop>
        <NavButtonDesktop href="/history" text="History">
          <ArchiveIcon className="h-12 w-12" />
        </NavButtonDesktop>
      </nav>
    </div>
  );
}

export default NavbarDesktop;
