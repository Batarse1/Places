import UsersList from "../components/UsersList/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'batarse1',
            image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
            places: 3
        }
    ];

    return (
        <div>
            <UsersList items={USERS} />
        </div>
    );
}

export default Users;