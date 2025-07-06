import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import UserDetails22 from '../UserDetails22/UserDetails22';

const User = ({user}) => {

    const [showInfo, setShowInfo] =useState(false);
    const {id,name, email, phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/laptops')

    }

    const userStyle = {
        border: '2px solid tomato',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone:{phone}</small></p>
            <Link to={`/users/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Details of : {id}</button>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo ? 'Hide': 'Show'} info</button>

            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails22 userPromise = {userPromise}></UserDetails22>

                </Suspense>
            }
        </div>
    );
};

export default User;