import React, { useEffect } from "react";

const EventInfoCard = (props: any) => {

    useEffect(() => {
        document.getElementById("eventinfocard").classList.add("top-1/4")
        new Promise(resolve => setTimeout(resolve, 50))
        .then(() => document.getElementById("eventinfocard").classList.remove("top-full"))
        console.log("clic")
    }, [])

    return <div id="eventinfocard" className="fixed top-full h-screen max-w-xl flex flex-col items-center z-50 transition-all duration-300 ease-in-out">
        <div className="text-gray-100 text-6xl h-full bg-gray-600 w-4/5 rounded-t-3xl" onClick={props.unMount}>
            {props.data.name}
        </div>
    </div>
}

export default EventInfoCard