import styled from "styled-components";

const Card = ({styleComponent, style, children}) => {
    const StyledCard = styled.div`
        /* Positioning */
        position: relative;
        
        /* Display & Box Model */
        margin: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 6px;
        padding: 1rem;

        /* Color */
        background: white;

        /* Other */
        overflow: hidden;
        ${styleComponent}
    `

    return (
        <StyledCard style={style}>
            {children}
        </StyledCard>
    );
};

export default Card;