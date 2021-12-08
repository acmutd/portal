import React, { useState } from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";
import data from '../components/eventdata.json'
import EventInfoCard from "../components/EventInfoCard";

function Events(props: any) {
  const [info, setInfo] = useState(false)
  const [currData, setCurrData] = useState()

  const handleClick = () => {
      setInfo(true)
  }

  const handleUnmount = () => {
      // console.log("unmounting")
      setInfo(false)
  }

  const handleData = (event) => {
    setCurrData(event)
    console.log(currData)
  }
  return (
    <Framework
      content={
        <>
            {data.map(ele => <EventCard key={ele.key} data={ele} mount={handleClick} unMount={handleUnmount} info={info} handleData={handleData}/>)}
            { info ? <EventInfoCard data={currData} unMount={handleUnmount}/> : null}

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
