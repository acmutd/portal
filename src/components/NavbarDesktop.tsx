import React from "react";
import HistoryIcon from '@mui/icons-material/History';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NavButtonDesktop from "./NavButtonDesktop";

function NavbarDesktop(props: any) {
  return (
    <div className="sm:flex flex-col  items-end h-full w-full ">
      <nav>
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
