import React from "react"
import Logo from "./DivisionLogo"
import EventStatus from "./EventStatus"

const displayText = {
    projects: "projects.",
    media: "media.",
    development: "engineering.",
    research: "research.",
    industry: "industry.",
    education: "education.",
    community: "community.",
    hackutd: "hackutd.",
}

const EventCard = ({dept, status}: any) => {
    // hardcoded info for each event card, this'll be what we need for each card atm
    const name = "ACM x Goldman Sachs Engineering Presents: alloy"
    const date: Date = new Date(2021, 9, 15, 19, 29, 0)
    let dateString = date.toDateString().split(' ')
    // dept = "education"
    // status = 1

    return (
        /* spacing */
        <div className="h-auto w-full p-6 pb-0">
            {/* card */}
            <div className=" relative h-auto w-full p-4 bg-gray-800 rounded-2xl flex justify-between cursor-pointer select-none">
                {/* status card */}
                <EventStatus status={status}/>
                {/* date */}
                <div className="flex flex-col justify-center">
                    <div className="text-center font-light text-base">
                        {dateString[0]}
                    </div>
                    <div className="text-center font-light text-4xl">
                        {dateString[2]}
                    </div>
                    <div className="text-center font-light text-xl">
                        {dateString[1]}
                    </div>
                    {/* grabbing time of event as such -
                    <div className="text-center font-light text-xs">
                        {(date.getHours() + 1) + ":" + (date.getMinutes() + 1)}
                    </div> */}
                </div>
                {/* title & division */}
                <div className="flex flex-col justify-between">
                    <div className="text-right font-medium text-lg pl-4 pt-4 xs:text-xl">
                        {name}
                    </div>
                    <div className="flex justify-end items-end select-none">
                        <Logo division={dept} color="white"/>
                        <div className={`text-center font-semibold text-xs ml-1 projects-gradient ${dept + "-gradient"}`}>
                            {displayText[dept]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard