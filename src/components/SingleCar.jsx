import React from 'react';
// import { useParams } from "react-router-dom";
import {
  Pane,
  Heading,
  Card,
  Link,
  Paragraph, 
  IconButton,
} from 'evergreen-ui';
import SingleCarNotes from './SingleCarNotes';

function SingleCar() {
  // on mount, use id to fetch info from db
  // let { id } = useParams();

  return (
    <Pane className="single-car">
        <Heading is="h2">Make Model Year</Heading>
        {/* Link to /edit/:id carform with pre-filled info */}
        <IconButton icon="edit" />
        <Heading is="h3">Quick facts: </Heading>
        <Link>Link to car</Link>
        <Card>List of tags</Card>
        <Paragraph>Price Range</Paragraph>

        <Heading is="h2">Notes</Heading>
        <Paragraph>Add, edit, or delete your notes.</Paragraph>
        <SingleCarNotes />
    </Pane>
  );
}

export default SingleCar;