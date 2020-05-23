import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { Heading, Button } from 'evergreen-ui';

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <Heading is="h1" size={900} color="white" paddingBottom="10px">Car Cards</Heading>
                <Button height="34">
                    {/* if home, add new card button, if not, go home button */}
                    <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/form">Add new card</NavLink>
                </Button>
            </div>
        </header>
    )
}