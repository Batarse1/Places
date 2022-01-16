import styled from "styled-components";

import UserItem from "../UserItem/UserItem";
import Card from "../../../shared/components/UIElements/Card/Card";

const StyledCenter = styled.div`
    /* Display & Box Model */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Text */
    text-align: center;
`

const StyledUsersList = styled.ul`
    /* Display & Box Model */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
    width: 90%;
    max-width: 50rem;

    /* Other */
    list-style: none;
`

const UsersList = ({ items }) => {
    if (items.length === 0) {
        return (
            <StyledCenter>
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </StyledCenter>
        );
    }
    else {
        return (
            <StyledUsersList>
                {items.map(user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />
                ))}
            </StyledUsersList>
        );
    }
};

export default UsersList;