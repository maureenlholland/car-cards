import React from 'react';
import { Heading } from 'evergreen-ui'
import CarCards from './components/CarCards';

const wrapperStyles = { maxWidth: '900px', margin: '0 auto', padding: '40px' };

function App() {
  return (
    <div className="car__cards">
      <header>
        <Heading is="h1" size={900} marginTop="40px" textAlign="center">Car Cards</Heading>
      </header>
      <main style={wrapperStyles}>
        <CarCards />
      </main>
    </div>
  );
}

export default App;
