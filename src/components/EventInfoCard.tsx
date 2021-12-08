import React, { useEffect } from "react";

const EventInfoCard = (props: any) => {

    useEffect(() => {
        // testing
        // console.log(props.data.name)
    }, [])

    return <div className="fixed top-3/4 left-0 w-screen h-screen flex flex-col items-center transition-all z-50">
        <div className="text-gray-100 text-8xl bg-red-400 max-w-3xl" onClick={props.unMount}>
            Info Card yo wassup<br/>
            {props.data.name}
        </div>
    </div>
}

export default EventInfoCard