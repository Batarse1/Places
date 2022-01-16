import ReactDOM from 'react-dom';
import styled from "styled-components";

const StyledBackdrop = styled.div`
    /* Positioning */
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

    /* Display & Box Model */
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
`

const Backdrop = ({ onClick }) => {
    return ReactDOM.createPortal(
        <StyledBackdrop onClick={onClick}></StyledBackdrop>,
        document.getElementById('backdrop-hook')
    );
};

export default Backdrop;