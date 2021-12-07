import React from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";
import data from '../components/eventdata.json'

function Events(props: any) {
  return (
    <Framework
      content={
        <>
            {data.map(ele => <EventCard data={ele}/>)}
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
