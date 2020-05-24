import React from 'react';
import {
    Pane,
    TextInputField,
    Button,
} from 'evergreen-ui';

export default function Login({ name, label, isActiveTab }) {
    const handleSubmit = (e) => {
        e.preventDefault()
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
                    required
                /> 
                <TextInputField
                    type="password"
                    label="Password"
                    name="password"
                    required
                /> 
                <Button type="submit">{label}</Button>
            </form>
        </Pane>
    );
}