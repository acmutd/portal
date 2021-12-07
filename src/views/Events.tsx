import React from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";
import { ReactComponent as AcmLogo } from '../assets/svgs/acm.svg'

function Events(props: any) {
  return (
    <Framework
      content={
        <>
          <div className="text-gray-900 dark:text-gray-50 pb-20 flex justify-center flex-col absolute w-full top-1/12 md:relative">
            <EventCard dept="education" status={1}/>
            <EventCard dept="development"status={1}/>
            <EventCard dept="media" status={2}/>
            <EventCard dept="industry"/>
            <EventCard dept="education" status={2}/>
            <EventCard dept="projects"/>
            <EventCard dept="community"/>
            <EventCard dept="media" status={2}/>
            <EventCard dept="projects"/>
            <EventCard dept="research" status={2}/>
            <EventCard dept="hackutd"/>
            <EventCard dept="development"/>
            <EventCard dept="media" status={2}/>
            <EventCard dept="community"/>
            <EventCard dept="education" status={2}/>
          </div>
          <div className="fixed top-0 h-1/5 w-full md:hidden flex justify-center bg-gradient-to-b from-gray-900 to-transparent">
            <AcmLogo className="mt-6"/>
            <div className="h-14 w-14 rounded-full bg-grey-700 absolute top-5 right-5 border-2 border-grey-100"></div>
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
