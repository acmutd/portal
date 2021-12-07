import React from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";
import { ReactComponent as AcmLogo } from '../assets/svgs/acm.svg'
import data from '../components/eventdata.json'

function Events(props: any) {
  return (
    <Framework
      content={
        <>
          <div className="text-gray-900 dark:text-gray-50 pb-20 flex justify-center flex-col w-full md:relative">
            <div className="relative top-0 h-28 w-full"/>
            {data.map(ele => <EventCard data={ele}/>)}
          </div>
          <div className="fixed top-0 h-1/5 w-full md:max-w-xl flex justify-center bg-gradient-to-b from-gray-900 to-transparent">
            <AcmLogo className="mt-6 cursor-pointer"/>
            <div className="h-14 w-14 rounded-full bg-grey-700 absolute top-5 right-5 border-2 border-grey-100 cursor-pointer md:hidden"/>
          </div>
        </>
      }
      sidebar={
        <>
          <SidebarContent>henlo</SidebarContent>
          <SidebarContent>henlo2</SidebarContent>
        </>
      }
    />
  );
}

export default Events;
