import React from "react";
import HistoryIcon from '@mui/icons-material/History';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NavButtonDesktop from "./NavButtonDesktop";
import { ReactComponent as AcmLogo } from '../assets/svgs/acm.svg'

function NavbarDesktop(props: any) {
  return (
    <div className="sm:flex flex-col items-end h-full w-full ">
      <nav className="sticky top-0">
        <div className="flex justify-center my-12">
            <AcmLogo className="transform scale-75 xl:scale-150 cursor-pointer"/>
        </div>
        <div className="flex justify-center mt-14">
          <div className="h-14 w-14 xl:h-20 xl:w-20 rounded-full bg-grey-700 border-2 border-grey-100">
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
