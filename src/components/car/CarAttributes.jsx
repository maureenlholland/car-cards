import React from 'react';
import { UnorderedList, ListItem, Badge } from 'evergreen-ui';

export default function CarAttributes({ attributes }) {
    return (
        <UnorderedList className="car-attribute">
            {attributes.map((attribute) => (
                <ListItem key={attribute.value}>
                    <Badge color="neutral" isSolid>{attribute.label}</Badge>
                </ListItem>
            ))}
        </UnorderedList>
    );
};
