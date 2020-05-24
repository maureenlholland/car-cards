import React, { useParams } from 'react';
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

export default function Deck() {
  // on mount, use id to fetch info from db
  let { id } = useParams();
  // mock data for now
  const deck = deck[0];

  return (
    <Pane className={`deck deck--id`}>
        <UnorderedList>
          {cars.map((c) => <CarCard key={c.id} car={c}/>)}
        </UnorderedList>
    </Pane>
  );
}
