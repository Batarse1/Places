import styled from "styled-components";

const Avatar = ({ image, alt, size, style, styleComponent}) => {
    const StyledAvatar = styled.div`
        /* Display & Box Model */
        width: 100%;
        height: 100%;
        display: flex; 
        justify-content: center;
        align-items: center;

        /* Other */
        ${styleComponent}

        img {
            /* Display & Box Model */
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;

            /* Other */
            object-fit: cover;
        }
    `

    return (
        <StyledAvatar style={style}>
            <img src={image} alt={alt} style={{ width: size, height: size }} />
        </StyledAvatar>
    );
};

export default Avatar;