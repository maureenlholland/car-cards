import React from 'react';
import { useParams } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  Pane,
  UnorderedList,
  ListItem,
  Button,
} from 'evergreen-ui';
import CarSummary from './car/CarSummary';
import CarAttributes from './car/CarAttributes';
import cars from '../mockData/cars';
import decks from '../mockData/decks';

function CarCard({ car }) {
  return (
    <ListItem className="car-cards__single">
      <Card elevation={2} padding="20px" background="white">
        <CarSummary car={car} />
        <CarAttributes attributes={car.attributes} />
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/car/${car.id}`}>
          <Button marginTop="20px"  iconAfter="arrow-right">See full summary</Button>
        </NavLink>
      </Card>
    </ListItem>
  );
}

export default function Deck() {
  // on mount
  // use id to fetch deck cards from db
  // set deck user avatars with random dog pictures, do not refresh pictures for rest of session
  // let { id } = useParams();
  // mock data for now
  const deck = decks[0];

  return (
    <Pane className={`deck deck--${deck.id}`}>
        <UnorderedList>
          {cars.map((c) => <CarCard key={c.id} car={c}/>)}
        </UnorderedList>
    </Pane>
  );
}
