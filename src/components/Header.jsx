import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { Heading, Button } from 'evergreen-ui';

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                {/* add home button icon before text */}
                <Heading is="h1" size={900} color="white" paddingBottom="10px">Car Cards</Heading>
                {/* if home, no button */}
                {/* if deck, label of deck and add new card button */}
                {/* if car or form, go back button */}
                <Button height="34">
                    <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/car/form">Add new card</NavLink>
                </Button>
            </div>
        </header>
    )
}