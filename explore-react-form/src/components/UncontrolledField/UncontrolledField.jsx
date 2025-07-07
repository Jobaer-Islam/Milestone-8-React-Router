import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name'/> <br />
                <input type="email" ref={emailRef} name="email" placeholder='email' /> <br />
                <input type="password" ref={passwordRef} name="password" placeholder='password' /> <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default UncontrolledField;