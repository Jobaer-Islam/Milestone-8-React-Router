import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            <h2>This is Users Page</h2>
            <div>
                {users.map(user => <User user={user}></User>)}
            </div>
        </div>
    );
};

export default Users;