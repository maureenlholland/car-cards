import React from 'react';
import { useParams } from "react-router-dom";
import {
  Pane,
  Heading,
  Button,
  Card,
  Link,
  Paragraph, 
  IconButton,
  TextareaField
} from 'evergreen-ui'

function SingleCar() {
  // on mount, use id to fetch info from db
  // let { id } = useParams();

  return (
    <Pane className="car__single">
        <Heading is="h2">Make Model Year</Heading>
        {/* on click return to car form with pre-filled info */}
        <IconButton icon="edit" />
        <Heading is="h3">Quick facts: </Heading>
        <Link>Link to car</Link>
        <Card>List of tags</Card>
        <Paragraph>Price Range</Paragraph>

        <Heading is="h2">Notes</Heading>
        <Paragraph>All notes, shown with username (ability to edit/delete signed-in user notes)</Paragraph>

        {/* on click, display textarea */}
        <Button appearance="primary">Add note</Button>
        <TextareaField
          label="New Note"
          description="Highlight pros or cons, add personal opinions, link to outside reviews."
          inputHeight={200}
        />
    </Pane>
  );
}

export default SingleCar;