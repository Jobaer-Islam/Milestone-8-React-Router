import React, { use } from 'react';

const UserDetails22 = ({userPromise}) => {
    const user = use(userPromise);
    const {name, username} = user;
    return (
        <div>
            <p><small>Name: {name}</small></p>
            <p>{username}</p>
        </div>
    );
};

export default UserDetails22;