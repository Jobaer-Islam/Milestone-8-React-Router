import React, { use } from 'react';

const Users2 = ({userPromise}) => {

    const users2 = use(userPromise);

    console.log('users 2 suspense data load', users2);

    return (
        <div>
            <h2>Page for Users2</h2>
        </div>
    );
};

export default Users2;