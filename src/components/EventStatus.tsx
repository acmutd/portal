import React from "react";
import PropTypes from 'prop-types'
import CheckIcon from '@mui/icons-material/Check';

// 1 = ongoing
// 2 = attending
// 0 = empty

const EventStatus = ({ status }) => {
    if (status === 1) {
        return <div className="status ongoing-gradient">
            Ongoing
        </div>
    }
    if (status === 2) {
        return <div className="status attending-gradient">
            Attending
            <CheckIcon/>
        </div>
    }
    else {
        return <></>
    }
    
}

EventStatus.propTypes = {
    status: PropTypes.number
    // must also be 0-2 but ill add that later
}

EventStatus.defaultProps = {
    status: 0
  };
export default EventStatus