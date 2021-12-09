import React, { useEffect, useRef, useState } from "react";
import EventCard from "../components/EventCard";
import Framework from "../components/Framework";
import SidebarContent from "../components/SidebarContent";
import data from '../components/eventdata.json'
import EventInfoCard from "../components/EventInfoCard";

const Events = () => {
  const [info, setInfo] = useState(false)
  const [currData, setCurrData] = useState()

  const handleClick = () => {
      setInfo(true)
  }

  const handleUnmount = () => {
      // console.log("unmounting")
      document.getElementById("eventinfocard").classList.add("top-full", "transition-all")
      new Promise(resolve => setTimeout(resolve, 100))
      .then(() => document.getElementById("eventinfocard").classList.remove("top-1/4"))
      .then(() => setInfo(false))
  }

  const handleData = (event) => {
    setCurrData(event)
    console.log(currData)
  }

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleUnmount()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])
  }

  const cardRef = useRef(null)
  useOutsideAlerter(cardRef)

  return (
    <Framework
      content={
        <>
            {data.map(ele => <EventCard key={ele.key} data={ele} mount={handleClick} handleData={handleData}/>)}
            { info ? <EventInfoCard data={currData} unMount={handleUnmount} cardRef={cardRef}/> : null}

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
