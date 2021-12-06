import React from "react"
import Logo from "./DivisionLogo"

const EventCard = ({dept}: any) => {
    // hardcoded info for each event card, thisll be what we need for each card atm
    const name = "Introduction to Firebase with GCP"
    // dept = "education"
    const date: Date = new Date(2021, 9, 15, 19, 30, 0)
    let dateString = date.toDateString().split(' ')
    const status = "Ongoing" // need time to figure out how to format this

    return (
        <div className="h-auto w-full p-6 pb-0">
            <div className="h-auto w-auto p-4 bg-gray-800 rounded-3xl flex justify-between">
                <div className="flex flex-col">
                    <div>
                        {dateString[0]}
                    </div>
                    <div>
                        {dateString[1]}
                    </div>
                    <div>
                        {dateString[2]}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-end">
                        {name}
                    </div>
                    <div className="flex justify-end">
                        {dept}
                        <Logo division={dept} color="white"/>
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default EventCard