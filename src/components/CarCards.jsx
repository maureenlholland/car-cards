import React from 'react';
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  Pane,
  UnorderedList,
  ListItem,
  Button,
} from 'evergreen-ui';
import CarSummary from './CarSummary';
import CarAttributes from './CarAttributes';
import cars from '../mockData/cars';

function CarCard({ car }) {
  return (
    <ListItem className="car-cards__single">
      <Card elevation={2} padding="20px" background="white">
        <CarSummary car={car} />
        <CarAttributes attributes={car.attributes} />
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/mazda">
          <Button marginTop="20px"  iconAfter="arrow-right">See full summary</Button>
        </NavLink>
      </Card>
    </ListItem>
  );
}

export default function CarCards() {
  return (
    <Pane className="car-cards">
        <UnorderedList>
          {cars.map((c) => <CarCard key={c.id} car={c}/>)}
        </UnorderedList>
    </Pane>
  );
}
