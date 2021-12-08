import React from "react"
import Logo from "./DivisionLogo"
import EventInfoCard from "./EventInfoCard"
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

const EventCard = ({data, mount, unMount, info, handleData}: any) => {
    const datetime: Date = new Date(data.date)
    let dateString = datetime.toDateString().split(' ')

    const handleClick = () => {
        handleData(data)
        mount()
    }

    return (
        /* spacing */
        <div className="h-auto w-full p-6 pt-0">
            {/* card */}
            <div className="relative h-auto w-inherit p-4 bg-gray-800 rounded-2xl flex justify-between cursor-pointer select-none" onClick={handleClick}>
                {/* status card */}
                <EventStatus status={data.status}/>
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
                </div>
                {/* title & division */}
                <div className="flex flex-col justify-between">
                    <div>
                    </div>
                    <div className="text-right font-medium text-lg pl-4 pt-4 xs:text-xl">
                        {data.name}
                    </div>
                    <div className="flex justify-end items-end select-none">
                        { data.dept ? <Logo division={data.dept} color="white"/> : <Logo color="white"/>}
                        { data.dept ? 
                        <div className={`text-center font-semibold text-xs ml-1 ${data.dept + "-gradient"}`}>
                            {displayText[data.dept]}
                        </div>
                        :
                        <div className={`text-center font-semibold self-center text-xs ml-1`}>
                            ACM
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard