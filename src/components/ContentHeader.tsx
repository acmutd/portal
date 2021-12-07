import React from "react";
import { ReactComponent as AcmLogo } from '../assets/svgs/acm.svg'

const ContentHeader = () => {
    return  <div className="flex justify-center fixed top-0 h-1/5 w-full md:max-w-xl bg-gradient-to-b from-gray-900 to-transparent">
                <AcmLogo className="mt-6 cursor-pointer"/>
                <div className="h-14 w-14 rounded-full bg-grey-700 absolute top-5 right-5 border-2 border-grey-100 cursor-pointer md:hidden"/>
            </div>
}

export default ContentHeader