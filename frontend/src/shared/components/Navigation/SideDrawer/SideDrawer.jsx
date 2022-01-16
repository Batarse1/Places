import ReactDOM from 'react-dom';
import styled from "styled-components";

const StyledSideDrawer = styled.aside`
    /* Positioning */
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    /* Display & Box Model */
    height: 100vh;
    width: 70%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`

const SideDrawer = ({ children }) => {
    const content = <StyledSideDrawer>{children}</StyledSideDrawer>;

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;