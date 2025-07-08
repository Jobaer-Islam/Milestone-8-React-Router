import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( name, email, password);
        if (password.length < 6) {
            setError('Password must be 6 characters or longer!');
        }
        else {
            setError('');
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length < 6){
        //     setError('Password must be 6 characters or longer!');
        // }
        // else{
        //     setError('');
        // }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='your name' onChange={handleNameChange} defaultValue={name} required /> <br />
                <input type="email" name="email" placeholder='Your Mail' onChange={handleEmailChange} defaultValue={email} required /> <br />
                <input type="password" name="password" placeholder='Enter Pass' onChange={handlePasswordOnChange} defaultValue={password} required /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;