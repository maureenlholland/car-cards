import React from 'react';
import {
    Heading,
    Paragraph,
    Link
} from 'evergreen-ui';

export default function CarSummary({ car }) {
    return (
        <>
        <Heading is="h2" size={700} marginBottom="10px">{`${car.make} ${car.model} ${car.year}`}</Heading>
        <Link>{car.link}</Link>
        <Paragraph marginTop="10px" marginBottom="20px">Price Range: {`${car.lowPrice} - ${car.highPrice}`}</Paragraph>
        </>
    );
}
