import React, { useState } from 'react';
import {
    Pane,
    TextInputField,
    Button,
} from 'evergreen-ui';

export default function Signup({ name, label, isActiveTab }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, username, password)
        console.log('validate signup data, redirect to home page')
        // call firebase to create user
          // on success, redirect to home 
          // on failure, display errors
    }

    return (
        <Pane
            key={name}
            id={`${name}-panel`}
            role="tabpanel"
            aria-labelledby={`${name}-tab`}
            aria-hidden={!isActiveTab}
            display={isActiveTab ? 'block' : 'none'}
        >
            <form onSubmit={(e, data) => handleSubmit(e, { type: name, email, password, username })}>
                <TextInputField
                    type="email"
                    label="Contact Email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextInputField
                    label="Username"
                    name="username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextInputField
                    type="password"
                    label="Password"
                    name="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                /> 
                <Button type="submit">{label}</Button>
            </form>
        </Pane>
    );
}
