import React from "react";
import NavButton from "./NavButton";
import HistoryIcon from '@mui/icons-material/History';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Navbar(props: any) {
  return (
    <nav className="md:hidden pb-safe pt-1 fixed inset-x-0 bottom-0 grid grid-cols-3 justify-items-stretch bg-gray-200 dark:bg-gray-800 w-screen border-t border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-200">
      <NavButton href="/events" text="Events">
        <BookmarkAddedIcon className="h-8 w-8 transform scale-150 my-2" />
      </NavButton>
      <NavButton href="/apply" text="Apply">
        <NoteAltIcon className="h-8 w-8 transform scale-150 my-2" />
      </NavButton>
      <NavButton href="/history" text="History">
        <HistoryIcon className="h-8 w-8 transform scale-150 my-2"/>
      </NavButton>
    </nav>
  );
}
//"sm:hidden grid grid-cols-4 justify-items-center fixed bottom-0 inset-x-0 bg-gray-800 w-screen h-14 border-t border-gray-700"
export default Navbar;
