import React from "react"
import PropTypes from 'prop-types'
import ProjLogo from '../assets/svgs/division_logos/black/projects.svg';
import MediaLogo from '../assets/svgs/division_logos/black/media.svg';
import ResLogo from '../assets/svgs/division_logos/black/research.svg';
import DevLogo from '../assets/svgs/division_logos/black/development.svg';
import IndustryLogo from '../assets/svgs/division_logos/black/industry.svg';
import EduLogo from '../assets/svgs/division_logos/black/education.svg';
import CommLogo from '../assets/svgs/division_logos/black/community.svg';
import HackLogo from '../assets/svgs/division_logos/black/hackutd.svg';
import WhiteProjLogo from '../assets/svgs/division_logos/white/projects.svg';
import WhiteMediaLogo from '../assets/svgs/division_logos/white/media.svg';
import WhiteResLogo from '../assets/svgs/division_logos/white/research.svg';
import WhiteDevLogo from '../assets/svgs/division_logos/white/development.svg';
import WhiteIndustryLogo from '../assets/svgs/division_logos/white/industry.svg';
import WhiteEduLogo from '../assets/svgs/division_logos/white/education.svg';
import WhiteCommLogo from '../assets/svgs/division_logos/white/community.svg';
import WhiteHackLogo from '../assets/svgs/division_logos/white/hackutd.svg';
import WhiteACMLogo from '../assets/svgs/acm.svg';

const divisionDecider = {
    projects: {
        display: "ACM Projects",
        black: ProjLogo,
        white: WhiteProjLogo
    },
    media: {
        display: "ACM Media",
        black: MediaLogo,
        white: WhiteMediaLogo
    },
    development: {
        display: "ACM Engineering",
        black: DevLogo,
        white: WhiteDevLogo
    },
    research: {
        display: "ACM Research",
        black: ResLogo,
        white: WhiteResLogo
    },
    industry: {
        display: "Industry",
        black: IndustryLogo,
        white: WhiteIndustryLogo
    },
    education: {
        display: "ACM Education",
        black: EduLogo,
        white: WhiteEduLogo
    },
    community: {
        display: "ACM Community",
        black: CommLogo,
        white: WhiteCommLogo
    },
    hackutd: {
        display: "HackUTD",
        black: HackLogo,
        white: WhiteHackLogo
    },
    acm: {
        display: "ACM",
        white: WhiteACMLogo,
        black: WhiteACMLogo
    }
}

const Logo = ({division, color}: any) => {
    if (division) {
        return <img 
                src={divisionDecider[division][color]}
                style={{ height: 22, width: 22 }}
                alt={divisionDecider[division]["display"]}
            />
    }
    else {
        return  <img 
            src={divisionDecider["acm"][color]}
            style={{ height: 24, width: 24 }}
            alt={divisionDecider["acm"]["display"]}
        />
     }
}

Logo.propTypes = {
    division: PropTypes.string,
    color: PropTypes.string.isRequired
}

export default Logo