import React from 'react'
import { ReactComponent as NavbarLogo } from '../../assets/svgs/logo.svg'
import { ReactComponent as NavbarMenu } from '../../assets/svgs/menu.svg'
import styled from 'styled-components'

const colors = {
    white: `rgba(255,255,255,1)`,
    black: `rgba(0,0,0,1)`
}

interface NavbarProps {
    onMenu: any
}

const Navbar = ({ onMenu }: NavbarProps) => {
    return (
        <NavbarComponent>
            <div className="navbar-bar">
                <div className="navbar-content">
                    <div className="navbar-start">
                        <NavbarLogo width='70px' height='70px'/>
                    </div>
                    <div className="navbar-center">
                        <button className="navbar-button">Divisions</button>
                        <button className="navbar-menu" onClick={onMenu}>
                            <NavbarMenu />
                        </button>
                        <button className="navbar-button">Join Us</button>
                    </div>
                    <div className="navbar-end">
                        <img className="navbar-auth" src="https://i.ibb.co/YfD2TCk/nopfp.png" alt="User PFP"></img>
                    </div>
                </div>
            </div>
        </NavbarComponent>
    );
}

const NavbarComponent = styled.div`
    .navbar-bar {
        width: 100%;
        background: linear-gradient(to bottom, ${colors.white}, rgba(0,0,0,0));
        padding: 2.5rem 6rem;
    }

    .navbar-content {
        width: 100%;
        position: relative;
        height: 5rem;
        display: flex;
        align-items: center;
    }

    /* nav center */
    .navbar-center {
        height: inherit;
        display: flex;
        align-items: center;
        position: absolute;
        left: 38%;
    }

    .navbar-button {
        font-size: 1.6rem;
        font-weight: bold;
        background: none;
        border: none;
        padding: 0.7rem 1.3rem;
    }

    .navbar-menu {
        padding: 0.5rem;
        margin: 0rem 2rem;
        background: none;
        border: none;
    }

    /* nav end */
    .navbar-end {
        position: absolute;
        right: 0px;
    }

    .navbar-auth {
        width: 3.5rem;
        height: 3.5rem;
    }
`

export default Navbar;