import React, { useState } from 'react';
import {
    Pane,
    Card,
    Heading,
    Tablist,
    Tab,
    TextInputField,
    Button,
} from 'evergreen-ui';

export default function Login() {
    const [activeTab, setActiveTab] = useState('login');
    // control inputs
    // create or set user on submit
    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Card background="white" padding="20px" elevation={3}>
                <Tablist paddingBottom="20px">
                    <Tab
                        height="40px"
                        key="login"
                        id="login-tab"
                        onSelect={() => setActiveTab('login')}
                        isSelected={activeTab === 'login'}
                        aria-controls="login-panel"
                    >
                        <Heading is="h2" size={700} color="#425A70">Login</Heading>
                    </Tab>
                    <Tab
                        height="40px"
                        key="signup"
                        id="signup-tab"
                        onSelect={() => setActiveTab('signup')}
                        isSelected={activeTab === 'signup'}
                        aria-controls="signup-panel"
                    >
                        <Heading is="h2" size={700} color="#425A70">Sign-up</Heading>
                    </Tab>
                </Tablist>
                <Pane padding="10px">
                    <Pane
                        key="login"
                        id="login-panel"
                        role="tabpanel"
                        aria-labelledby="login-tab"
                        aria-hidden={!activeTab === 'login'}
                        display={activeTab === 'login' ? 'block' : 'none'}
                    >
                        <form onSubmit={() => console.log('login')}>
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
                            <Button type="submit">Login</Button>
                        </form>
                    </Pane>
                    <Pane
                        key="signup"
                        id="signup-panel"
                        role="tabpanel"
                        aria-labelledby="signup-tab"
                        aria-hidden={!activeTab === 'signup'}
                        display={activeTab === 'signup' ? 'block' : 'none'}
                    >
                        <form onSubmit={() => console.log('sign-up')}>
                            <TextInputField
                                type="email"
                                label="Contact Email"
                                name="email"
                                required
                            />
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
                            <Button type="submit">Sign-up</Button>
                        </form>
                    </Pane>
                </Pane>
            </Card>
        </div>
    );
};
