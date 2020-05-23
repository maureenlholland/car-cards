import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Pane,
  Heading,
  Link,
  Paragraph, 
  IconButton,
} from 'evergreen-ui';
import CarNotes from './CarNotes';
import CarTags from './CarTags';
import car from '../mockData/car';

function Car() {
  // on mount, use id to fetch info from db
  let { id } = useParams();

  return (
    <Pane className={`car car--${id}`}>
        <Heading is="h2">{`${car.make} ${car.model} ${car.year}`}</Heading>
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`edit?id=${car.id}`}><IconButton icon="edit" /></NavLink>
        <Heading is="h3">Quick facts: </Heading>
        <Link>{car.link}</Link>
        <CarTags tags={car.attributes} />
        <Paragraph>Price Range: {`${car.lowPrice} - ${car.highPrice}`}</Paragraph>
        <Heading is="h3">User Notes: </Heading>
        <CarNotes savedNotes={car.notes} />
    </Pane>
  );
}

export default Car;