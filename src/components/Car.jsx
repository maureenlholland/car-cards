import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Pane,
  Heading,
  Card,
  Link,
  Paragraph, 
  IconButton,
} from 'evergreen-ui';
import CarNotes from './CarNotes';

function Car() {
  // on mount, use id to fetch info from db
  let { id } = useParams();

  return (
    <Pane className={`car car--${id}`}>
        <Heading is="h2">Make Model Year</Heading>
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="edit?id=mazda"><IconButton icon="edit" /></NavLink>
        <Heading is="h3">Quick facts: </Heading>
        <Link>Link to car</Link>
        <Card>List of tags</Card>
        <Paragraph>Price Range</Paragraph>
        <Heading is="h3">User Notes: </Heading>
        <CarNotes />
    </Pane>
  );
}

export default Car;