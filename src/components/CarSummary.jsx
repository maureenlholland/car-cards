import React from 'react';
import { Link as NavLink } from "react-router-dom";
import {
    Heading,
    Paragraph,
    IconButton,
    Link
} from 'evergreen-ui';

export default function CarSummary({ car }) {
    return (
        <>
        <Heading is="h2">{`${car.make} ${car.model} ${car.year}`}</Heading>
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`edit?id=${car.id}`}>
            <IconButton icon="edit" />
        </NavLink>
        <Link>{car.link}</Link>
        <Paragraph>Price Range: {`${car.lowPrice} - ${car.highPrice}`}</Paragraph>
        </>
    );
}