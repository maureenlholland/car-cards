import React from 'react';
import { UnorderedList, ListItem, Badge } from 'evergreen-ui';

export default function CarAttributes({ attributes }) {
    return (
        <UnorderedList className="car-attribute">
            {attributes.map((attribute) => (
                // long tags could spill out of container on mobile
                <ListItem key={attribute.value}>
                    <Badge height="auto" color="neutral" isSolid>{attribute.label}</Badge>
                </ListItem>
            ))}
        </UnorderedList>
    );
};
