import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    // find params in two ways
    //1.  const params = useParams();
    //    console.log(params.userId);

    // 2.
    const {userId} = useParams();
    console.log(userId);


    
    const {website, name } = user;
    const navigate = useNavigate();

    return (
        <div>
            <h2>User Details Here</h2>
            <h4>Name:{name}</h4>
            <p>Website link: {website}</p>
            <button onClick={()=> navigate(-1)}>GO Back</button>
        </div>
    );
};

export default UserDetails;