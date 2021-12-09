import React, { useEffect } from "react";

const EventInfoCard = ({ data, cardRef, unMount }) => {

    useEffect(() => {
        // animation on mount
        document.getElementById("eventinfocard").classList.add("top-1/4")
        new Promise(resolve => setTimeout(resolve, 5))
        .then(() => document.getElementById("eventinfocard").classList.remove("top-full", "transition-all"))
    }, [])

    return <div id="eventinfocard" className="fixed top-full left-0 h-screen w-screen z-10 transition-all duration-300 ease-in-out flex justify-center">
        <div ref={cardRef} className="flex flex-col items-center w-10/12 md:w-card h-full text-gray-100 text-2xl bg-gray-600 rounded-t-3xl">
            <div onClick={unMount}>X</div>
            <div className="text-center">{data.name}</div>
            <div className="text-center">{data.date}</div>
            <div className="text-center">{data.dept}</div>
        </div>
    </div>
}


// <div className="hidden md:flex flex-grow w-2/12">
// <div className="flex flex-col flex-grow-0 h-full lg:max-w-xl">
// <div className="flex-grow w-2/12">
export default EventInfoCard