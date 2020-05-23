import React from 'react';
import { Link as NavLink } from "react-router-dom";
import {
    Heading,
    Paragraph,
    Link,
    IconButton
} from 'evergreen-ui';

export default function CarSummary({ car }) {
    return (
        <>
        <div className="fb-container">
            <Heading is="h2" size={700} marginBottom="10px">
                {`${car.make} ${car.model} ${car.year}`}
            </Heading>
            <div className="actions actions--car">
                <NavLink to={`/form?id=${car.id}`}>
                    <IconButton icon="edit" />
                </NavLink>
                {/* are you sure popup, delete from db, update list */}
                <IconButton icon="trash" />
            </div>
        </div>
        <Link>{car.link}</Link>
        <Paragraph marginTop="10px" marginBottom="20px">Price Range: {`${car.lowPrice} - ${car.highPrice}`}</Paragraph>
        </>
    );
}
