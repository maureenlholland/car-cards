import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";
import { Heading, Button } from 'evergreen-ui';

export default function Header() {
    const isHome = useRouteMatch('/').isExact;

    return (
        <header>
            <div className="wrapper">
                <Heading is="h1" size={900} color="white">Car Cards</Heading>
                {!isHome && (
                    <Button height="34" marginTop="10px">
                        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/car/form">Add new card</NavLink>
                    </Button>
                )}
            </div>
        </header>
    )
}