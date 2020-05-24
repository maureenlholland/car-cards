import React from 'react';
import { Heading } from 'evergreen-ui';

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <Heading is="h1" size={900} color="white">Car Cards</Heading>
            </div>
        </header>
    )
}