import React from 'react';
import { UnorderedList, ListItem, Badge } from 'evergreen-ui';

export default function CarAttributes({ attribute }) {
    return (
        <UnorderedList className="car-attribute">
            {attribute.map((attribute) => <ListItem key={attribute.value}><Badge color="green" isSolid>{attribute.label}</Badge></ListItem>)}
        </UnorderedList>
    );
};
