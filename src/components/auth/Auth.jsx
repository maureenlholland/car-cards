import React, { useState } from 'react';
import {
    Pane,
    Card,
    Heading,
    Tablist,
    Tab
} from 'evergreen-ui';
import Login from './Login';
import Signup from './Signup';

const authTabs = {
    'login': 'Login',
    'signup': 'Sign up'
};

export default function Auth() {
    const [activeTab, setActiveTab] = useState('login')

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Card background="white" padding="20px" elevation={3}>
                <Tablist paddingBottom="20px">
                    {Object.keys(authTabs).map((key) => (
                        <Tab
                            height="40px"
                            key={key}
                            id={`${key}-tab`}
                            onSelect={() => setActiveTab(key)}
                            isSelected={activeTab === key}
                            aria-controls={`${key}-panel`}
                        >
                            <Heading is="h2" size={700} color="#425A70">{authTabs[key]}</Heading>
                        </Tab>
                    ))}
                </Tablist>
                <Pane padding="10px">
                    <Login
                        key="login"
                        name="login"
                        label={authTabs['login']}
                        isActiveTab={activeTab === 'login'}
                    />
                    <Signup
                        key="signup"
                        name="signup"
                        label={authTabs['signup']}
                        isActiveTab={activeTab === 'signup'}
                    />
                </Pane>
            </Card>
        </div>
    );
};
