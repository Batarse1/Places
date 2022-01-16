import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledNavigationLinks = styled.ul`
    /* Display & Box Model */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Other */
    list-style: none;

    @media (min-width: 768px) {
        /* Display & Box Model */
        flex-direction: row;
    }

    li {
        /* Display & Box Model */
        margin: 1rem;
        
        @media (min-width: 768px) {
            /* Display & Box Model */
            margin: 0 0.5rem;
        }
    }

    a {
        /* Display & Box Model */
        padding: 0.5rem;
        border: 1px solid transparent;

        /* Color */
        color: #292929;

        /* Text */
        text-decoration: none;

        &:hover, &:active, &.active {
            /* Display & Box Model */
            border-color: #292929;

            /* Color */
            background: #f8df00;
            color: #292929;
        }

        @media (min-width: 768px) {
            /* Color */
            color: white;

            /* Text */
            text-decoration: none;
        }
    }

    button {
        /* Display & Box Model */
        border: 1px solid #292929;
        padding: 0.5rem;

        /* Color */
        color: #292929;
        background: transparent;

        /* Text */
        font: inherit;

        /* Other */
        cursor: pointer;

        @media (min-width: 768px) {
            /* Display & Box Model */
            border: 1px solid white;

            /* Color */
            color: white;
            background: transparent;
        }

        &:focus {
            /* Display & Box Model */
            outline: none;
        }

        &:hover, &:active {
            /* Color */
            background: #292929;
            color: white;

            @media (min-width: 768px) {
                /* Color */
                background: #f8df00;
                color: #292929;
            }
        }
    }
`

const NavLinks = () => {
    return (
        <StyledNavigationLinks>
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </StyledNavigationLinks>
    );
}

export default NavLinks;