import React from "react";
import HistoryIcon from '@mui/icons-material/History';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NavButtonDesktop from "./NavButtonDesktop";

const NavbarDesktop = () => {
  return (
    <div className="sm:flex flex-col items-end h-full w-full ">
      <nav className="sticky top-0">
        <div className="flex justify-center mt-8">
          <div className="h-14 w-14 xl:h-20 xl:w-20 rounded-full bg-grey-700 border-2 border-grey-100 cursor-pointer">
            {/* image here */}
          </div>
        </div>
        <NavButtonDesktop href="/events" text="Events">
          <BookmarkAddedIcon className="h-12 w-12 transform scale-150" />
        </NavButtonDesktop>
        <NavButtonDesktop href="/apply" text="Apply">
          <NoteAltIcon className="h-12 w-12 transform scale-150" />
        </NavButtonDesktop>
        <NavButtonDesktop href="/history" text="History">
          <HistoryIcon className="h-12 w-12 transform scale-150" />
        </NavButtonDesktop>
      </nav>
    </div>
  );
}

export default NavbarDesktop;
