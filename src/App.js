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
import SingleCar from './components/SingleCar';

const wrapperStyles = { maxWidth: '900px', margin: '0 auto', padding: '40px' };

function App() {
  return (
    <div className="car__cards">
      <header>
        <Heading is="h1" size={900} marginTop="40px" textAlign="center">Car Cards</Heading>
      </header>
      <main style={wrapperStyles}>
        <Pane
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridGap="20px"
        >
          <Card elevation={1} padding="20px" background="white">
            <Heading>Mazda CX-5</Heading>
            <Paragraph>Quick facts:</Paragraph>
            <UnorderedList>
              <ListItem>Size</ListItem>
              <ListItem>Price (range from low to high trim</ListItem>
              <ListItem>Gas Mileage</ListItem>
            </UnorderedList>
          </Card>
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
        <SingleCar />
      </main>
    </div>
  );
}

export default App;
