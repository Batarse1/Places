import styled, {css} from "styled-components";

import { Link } from "react-router-dom";

import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";
import Card from "../../../shared/components/UIElements/Card/Card";

const StyledUserItem = styled.li`
    /* Display & Box Model */
    margin: 1rem;
    width: calc(45% - 2rem);
    min-width: 17.5rem;

    a {
        /* Display & Box Model */
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem;

        /* Color */
        color: white;
        background: #292929;

        /* Text */
        text-decoration: none;

        &:hover,  &:active {
            /* Color */
            background: #ffd900;
        }
    }

    &:hover,&:active {
        h2, h3 {
            /* Color */
            color: #292929;
        }
    }
`

const StyledUserItemContent = css`
    /* Display & Box Model */
    padding: 0;
`

const StyledUserItemImage = styled.div`
    /* Display & Box Model */
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
`

const StyledUserItemInfo = styled.div`
    h2 {
        /* Display & Box Model */
        margin: 0 0 0.5rem 0;

        /* Color */
        color: #ffd900;

        /* Text */
        font-size: 1.5rem;
        font-weight: normal;
    }

    h3 {
        /* Display & Box Model */
        margin: 0;
    }
`

const UserItem = ({ id, image, name, placeCount }) => {
    return (
        <StyledUserItem>
            <Card styleComponent={StyledUserItemContent}>
                <Link to={`/${id}/places`}>
                    <StyledUserItemImage>
                        <Avatar image={image} alt={name} />
                    </StyledUserItemImage>
                    <StyledUserItemInfo>
                        <h2>{name}</h2>
                        <h3>{placeCount} {placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </StyledUserItemInfo>
                </Link>
            </Card>
        </StyledUserItem>
    );
};

export default UserItem;