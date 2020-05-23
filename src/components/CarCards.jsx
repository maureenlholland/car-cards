import React from 'react';
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  Pane,
  Heading,
  Paragraph,
  UnorderedList,
  ListItem,
  Button,
  IconButton,
  Link
} from 'evergreen-ui'

function CarCard() {
  return (
    <ListItem className="car-cards__single">
      <Card elevation={2} padding="20px" background="white">
        <Heading is="h2">Mazda CX-5</Heading>
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="edit?id=mazda"><IconButton icon="edit" /></NavLink>
        {/* are you sure popup, delete from db, update list */}
        <IconButton icon="trash" />
        <Link>Link to car</Link>
        <Paragraph>Quick facts: Price, Size</Paragraph>
        <Paragraph>Tags list</Paragraph>
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/mazda"><Button>See details</Button></NavLink>
      </Card>
    </ListItem>
  );
}

export default function CarCards() {
  return (
    <Pane className="car-cards">
        <UnorderedList
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridGap="20px"
        >
          <CarCard />
          <CarCard />
        </UnorderedList>
        <Pane marginTop="40px" display="flex" justifyContent="center">
          <Button appearance="primary" height="34"><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/edit">Add new card</NavLink></Button>
        </Pane>
    </Pane>
  );
}
