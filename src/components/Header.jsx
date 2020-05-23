import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { Heading } from 'evergreen-ui';

export default function Header() {
    return (
        <header>
            <Heading is="h1" size={900} marginTop="40px" textAlign="center">
                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/">Car Cards</NavLink>
            </Heading>
        </header>
    )
}