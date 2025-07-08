import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} /> <br />
                <input defaultValue={email} type="email" onChange={emailOnChange} /> <br />
                <input type="submit" value="Submit" /> <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} />
            </form>
        </div>
    );
};

export default HookForm;