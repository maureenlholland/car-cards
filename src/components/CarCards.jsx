import React from 'react';
import { Link } from "react-router-dom";
import {
  Card,
  Pane,
  Heading,
  Paragraph,
  UnorderedList,
  ListItem,
  Button,
  IconButton
} from 'evergreen-ui'

function CarCard() {
  return (
    <ListItem>
      <Card elevation={2} padding="20px" background="white">
        <Heading is="h2">Mazda CX-5</Heading>
        {/* send to /edit with :id */}
        <IconButton icon="edit" />
        {/* are you sure popup, delete from db, update list */}
        <IconButton icon="trash" />
        <Link>Link to car</Link>
        <Paragraph>Quick facts: Price, Size</Paragraph>
        <Paragraph>Tags list</Paragraph>
        <Button>See details</Button>
      </Card>
    </ListItem>
  );
}

function CarCardList() {
  return (
    <Pane className="car__list">
        <UnorderedList
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridGap="20px"
        >
          <CarCard />
          <CarCard />
        </UnorderedList>
        <Pane marginTop="40px" display="flex" justifyContent="center">
          <Button appearance="primary" height="34"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/edit">Add new card</Link></Button>
        </Pane>
    </Pane>
  );
}

export default CarCardList;
