import React from 'react';
import { UnorderedList, ListItem, Badge } from 'evergreen-ui';

export default function CarTags({ tags }) {
    return (
        <UnorderedList className="car-tags">
            {tags.map((tag) => <ListItem><Badge color="green" isSolid>{tag.label}</Badge></ListItem>)}
        </UnorderedList>
    );
};
