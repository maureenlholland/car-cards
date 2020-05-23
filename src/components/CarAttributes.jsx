import React from 'react';
import { UnorderedList, ListItem, Badge } from 'evergreen-ui';

export default function CarAttributes({ tags }) {
    return (
        <UnorderedList className="car-tags">
            {tags.map((tag) => <ListItem key={tag.value}><Badge color="green" isSolid>{tag.label}</Badge></ListItem>)}
        </UnorderedList>
    );
};