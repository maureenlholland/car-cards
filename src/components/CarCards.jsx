import React from 'react';
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  Pane,
  UnorderedList,
  ListItem,
  Button
} from 'evergreen-ui';
import CarSummary from './CarSummary';
import CarAttributes from './CarAttributes';
import car from '../mockData/car';

function CarCard({ car }) {
  return (
    <ListItem className="car-cards__single">
      <Card elevation={2} padding="20px">
        <CarSummary car={car} />
        <CarAttributes attributes={car.attributes} />
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/mazda"><Button>See details</Button></NavLink>
      </Card>
    </ListItem>
  );
}

export default function CarCards() {
  return (
    <Pane className="car-cards">
        <UnorderedList>
          <CarCard car={car} />
          <CarCard car={car} />
        </UnorderedList>
        <Button appearance="primary" height="34">
          <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/edit">Add new card</NavLink>
        </Button>
    </Pane>
  );
}
