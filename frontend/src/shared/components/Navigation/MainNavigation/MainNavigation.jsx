import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../UIElements/Backdrop/Backdrop";

const StyledMainNavigationMenuBtn = styled.button`
    /* Display & Box Model */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    border: none;
    margin-right: 2rem;

    /* Color */
    background: transparent;

    /* Other */
    cursor: pointer;
    
    span {
        /* Display & Box Model */
        display: block;
        width: 3rem;
        height: 2.5px;

        /* Color */
        background: white;
    }

    @media (min-width: 768px) {
        /* Display & Box Model */
        display: none;
    }
`

const StyledMainNavigationDrawerNavigation = styled.nav`
    /* Display & Box Model */
    height: 100%;

    @media (min-width: 768px) {
        /* Display & Box Model */
        display: block;
    }
`

const StyledMainNavigationTitle = styled.h1`
    /* Color */
    color: white;

    a {
        /* Color */
        color: white;

        /* Text */
        text-decoration: none;
    }
`

const StyledMainNavigationHeaderNav = styled.nav`
    /* Display & Box Model */
    display: none;

    @media (min-width: 768px) {
        /* Display & Box Model */
        display: block;
    }
`

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return(
        <React.Fragment>
            { drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            { drawerIsOpen &&
            (<SideDrawer>
                <StyledMainNavigationDrawerNavigation>
                    <NavLinks />
                </StyledMainNavigationDrawerNavigation>
            </SideDrawer>)
            }
            <MainHeader>
                <StyledMainNavigationMenuBtn onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </StyledMainNavigationMenuBtn>
                <StyledMainNavigationTitle>
                    <Link to="/">Your Places</Link>
                </StyledMainNavigationTitle>
                <StyledMainNavigationHeaderNav>
                    <NavLinks />
                </StyledMainNavigationHeaderNav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;