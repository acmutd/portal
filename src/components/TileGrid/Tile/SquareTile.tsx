import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EduLogo } from '../../../assets/svgs/edu.svg'
import flyer from '../../../assets/images/flyer.png'


const SquareTile = () => {
    return (
        <TileComponent>
            <div className="tile-card">
                <div className="tile-content">
                    <div className="tile-top">
                        <div className="tile-title">Socket.io Workshop</div>
                    </div>
                    <div className="tile-end">
                        <div className="tile-end-left">
                            <div className="tile-date">Tomorrow</div>
                            <div className="tile-time">10:30PM</div>
                        </div>
                        <div className="tile-end-right">
                            <EduLogo />
                        </div>
                    </div>
                </div>
            </div>
        </TileComponent>
    );
}

const TileComponent = styled.div`
    .tile-card {
        width: 230px;
        height: 230px;
        border-radius: 30px;
        background: black;
        color: white;
    }
    .tile-content {
        padding: 1.3rem;
        display: flex;
        height: inherit;
        flex-flow: column;
        justify-content: space-between
    }
    .tile-end {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        font-size: 1.1rem;
    }

    /* Text */
    .tile-title {
        font-size: 1.8rem;
        font-weight: bold;
    }
`

export default SquareTile;