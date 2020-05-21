import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Heading } from 'evergreen-ui';
import CarCards from './components/CarCards';
import SingleCar from './components/SingleCar';

const wrapperStyles = { maxWidth: '900px', margin: '0 auto', padding: '40px' };

function App() {
  return (
    <Router>
      <div className="car__cards">
        <header>
          <Heading is="h1" size={900} marginTop="40px" textAlign="center">Car Cards</Heading>
        </header>
        <main style={wrapperStyles}>
          <Switch>
            <Route path="/car">
              <SingleCar />
            </Route>
            <Route path="/">
              <CarCards />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
