import React from "react"
import { ReactComponent as ProjLogo } from '../assets/svgs/division_logos/black/projects.svg';
import { ReactComponent as MediaLogo } from '../assets/svgs/division_logos/black/media.svg';
import { ReactComponent as ResLogo } from '../assets/svgs/division_logos/black/research.svg';
import { ReactComponent as DevLogo } from '../assets/svgs/division_logos/black/development.svg';
import { ReactComponent as IndustryLogo } from '../assets/svgs/division_logos/black/industry.svg';
import { ReactComponent as EduLogo } from '../assets/svgs/division_logos/black/education.svg';
import { ReactComponent as CommLogo } from '../assets/svgs/division_logos/black/community.svg';
import { ReactComponent as HackLogo } from '../assets/svgs/division_logos/black/hackutd.svg';






const divisionDecider = {
    projects: {
        display: "ACM Projects",
        logo: <ProjLogo/>
    },
    media: {
        display: "ACM Media",
        logo: <MediaLogo/>
    },
    development: {
        display: "ACM Engineering",
        logo: <DevLogo/>
    },
    research: {
        display: "ACM Research",
        logo: <ResLogo/>
    },
    industry: {
        display: "Industry",
        logo: <IndustryLogo/>
    },
    education: {
        display: "ACM Education",
        logo: <EduLogo/>
    },
    community: {
        display: "ACM Community",
        logo: <CommLogo/>
    },
    hackutd: {
        display: "HackUTD",
        logo: <HackLogo/>
    }
}

const Logo = (props: any) => {
    return divisionDecider[props.division].logo
}


export default Logo