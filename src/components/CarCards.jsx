import React from 'react';
import {
  Pane,
  Card,
  Heading,
  Paragraph,
  UnorderedList,
  ListItem,
  Button
} from 'evergreen-ui'

function CarCard() {
  return (
    <Card elevation={1} padding="20px" background="white">
    <Heading>Mazda CX-5</Heading>
    <Paragraph>Quick facts:</Paragraph>
    <UnorderedList>
        <ListItem>Size</ListItem>
        <ListItem>Price (range from low to high trim</ListItem>
        <ListItem>Gas Mileage</ListItem>
    </UnorderedList>
    </Card>
  );
}

function CarCardList() {
  return (
    <>
        <Pane
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridGap="20px"
        >
          <CarCard />
          <Card elevation={1} padding="20px" background="white">
            <Heading>Ford Escape</Heading>
            <Paragraph>Quick facts:</Paragraph>
            <UnorderedList>
              <ListItem>Size</ListItem>
              <ListItem>Price (range from low to high trim</ListItem>
              <ListItem>Gas Mileage</ListItem>
            </UnorderedList>
          </Card>
        </Pane>
        <Pane marginTop="40px" display="flex" justifyContent="center">
          <Button appearance="primary" height="34">Add new card</Button>
        </Pane>
    </>
  );
}

export default CarCardList;
