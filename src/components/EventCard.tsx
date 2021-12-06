import React from "react"
import Logo from "./DivisionLogo"

const displayText = {
    projects: "ACM Projects",
    media: "ACM Media",
    development: "ACM Engineering",
    research: "ACM Research",
    industry: "Industry",
    education: "ACM Education",
    community: "ACM Community",
    hackutd: "HackUTD",
}

const EventCard = ({dept}: any) => {
    // hardcoded info for each event card, this'll be what we need for each card atm
    const name = "ACM x Goldman Sachs Engineering Presents: alloy"
    // dept = "education"
    const date: Date = new Date(2021, 9, 15, 19, 30, 0)
    let dateString = date.toDateString().split(' ')
    const status = "Ongoing" // need time to figure out how to format this

    return (
        /* spacing */
        <div className="h-auto w-full p-6 pb-0">
            {/* card */}
            <div className="h-auto w-full p-4 bg-gray-800 rounded-2xl flex justify-between">
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
                    <div className="text-right font-medium text-lg pl-4 pt-4 xs:text-xl">
                        {name}
                    </div>
                    <div className="flex justify-end items-end">
                        <Logo division={dept} color="white"/>
                        <div className="text-center font-semibold text-2xs ml-1">
                            {displayText[dept]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard