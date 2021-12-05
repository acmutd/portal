import React from "react"
import { ReactComponent as ProjLogo } from '../assets/svgs/division_logos/black/projects.svg';
import { ReactComponent as MediaLogo } from '../assets/svgs/division_logos/black/media.svg';
import { ReactComponent as ResLogo } from '../assets/svgs/division_logos/black/research.svg';
import { ReactComponent as DevLogo } from '../assets/svgs/division_logos/black/development.svg';
import { ReactComponent as IndustryLogo } from '../assets/svgs/division_logos/black/industry.svg';
import { ReactComponent as EduLogo } from '../assets/svgs/division_logos/black/education.svg';
import { ReactComponent as CommLogo } from '../assets/svgs/division_logos/black/community.svg';
import { ReactComponent as HackLogo } from '../assets/svgs/division_logos/black/hackutd.svg';
import { ReactComponent as WhiteProjLogo } from '../assets/svgs/division_logos/white/projects.svg';
import { ReactComponent as WhiteMediaLogo } from '../assets/svgs/division_logos/white/media.svg';
import { ReactComponent as WhiteResLogo } from '../assets/svgs/division_logos/white/research.svg';
import { ReactComponent as WhiteDevLogo } from '../assets/svgs/division_logos/white/development.svg';
import { ReactComponent as WhiteIndustryLogo } from '../assets/svgs/division_logos/white/industry.svg';
import { ReactComponent as WhiteEduLogo } from '../assets/svgs/division_logos/white/education.svg';
import { ReactComponent as WhiteCommLogo } from '../assets/svgs/division_logos/white/community.svg';
import { ReactComponent as WhiteHackLogo } from '../assets/svgs/division_logos/white/hackutd.svg';





const divisionDecider = {
    projects: {
        display: "ACM Projects",
        black: <ProjLogo/>,
        white: <WhiteProjLogo/>
    },
    media: {
        display: "ACM Media",
        black: <MediaLogo/>,
        white: <WhiteMediaLogo/>
    },
    development: {
        display: "ACM Engineering",
        black: <DevLogo/>,
        white: <WhiteDevLogo/>
    },
    research: {
        display: "ACM Research",
        black: <ResLogo/>,
        white: <WhiteResLogo/>
    },
    industry: {
        display: "Industry",
        black: <IndustryLogo/>,
        white: <WhiteIndustryLogo/>
    },
    education: {
        display: "ACM Education",
        black: <EduLogo/>,
        white: <WhiteEduLogo/>
    },
    community: {
        display: "ACM Community",
        black: <CommLogo/>,
        white: <WhiteCommLogo/>
    },
    hackutd: {
        display: "HackUTD",
        black: <HackLogo/>,
        white: <WhiteHackLogo/>
    }
}

const Logo = (props: any) => {
    return divisionDecider[props.division][props.color]
}


export default Logo