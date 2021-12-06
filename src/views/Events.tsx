import React from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";

function Events(props: any) {
  return (
    <Framework
      content={
        <div className="text-gray-900 dark:text-gray-50 pb-20 flex justify-center flex-col">
          <EventCard dept="education"/>
          <EventCard dept="development"/>
          <EventCard dept="media"/>
          <EventCard dept="industry"/>
          <EventCard dept="education"/>
        </div>
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
