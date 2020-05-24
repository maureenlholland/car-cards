import React, { useState } from 'react';
import {
    Pane,
    TextInputField,
    Button,
} from 'evergreen-ui';

export default function Login({ name, label, isActiveTab }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        console.log('validate login data, redirect to home page')
        // call firebase to fetch user
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
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInputField
                    label="Username"
                    name="username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                {/* add custom password validation, at least 8 char, letters & numbers */}
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