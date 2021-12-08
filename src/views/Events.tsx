import React, { useState } from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";
import data from '../components/eventdata.json'

function Events(props: any) {
  const [info, setInfo] = useState(false)
  // const [currData, setCurrData] = useState([])

  const handleClick = () => {
      setInfo(true)
  }

  const handleUnmount = () => {
      // console.log("unmounting")
      setInfo(false)
  }

  // const handleData = (data) => {
  //   setCurrData(data)
  //   // lowkey forgot why I made this func but I gotta go do something else so prolly not gonna remember looool
  // }
  return (
    <Framework
      content={
        <>
            {data.map(ele => <EventCard key={ele.key} data={ele} mount={handleClick} unMount={handleUnmount} info={info}/>)}{/* handleData={handleData}/>)} */}
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
