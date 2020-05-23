import React from 'react';
import {
    Heading,
    Paragraph,
    Link
} from 'evergreen-ui';

export default function CarSummary({ car }) {
    return (
        <>
        <Heading is="h2">{`${car.make} ${car.model} ${car.year}`}</Heading>
        <Link>{car.link}</Link>
        <Paragraph>Price Range: {`${car.lowPrice} - ${car.highPrice}`}</Paragraph>
        </>
    );
}
