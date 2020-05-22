import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Heading, Pane } from 'evergreen-ui';
import CarCards from './components/CarCards';
import SingleCar from './components/SingleCar';
import CarForm from './components/CarForm';

const wrapperStyles = { maxWidth: '900px', margin: '0 auto', padding: '40px' };

function App() {
  return (
    <Router>
      <Pane className="car__cards">
        <header>
          <Heading is="h1" size={900} marginTop="40px" textAlign="center">Car Cards</Heading>
        </header>
        <main style={wrapperStyles}>
          <Switch>
          {/* add /edit/:id for existing car edits*/}
          <Route path="/edit">
              <CarForm />
            </Route>
            <Route path="/:id">
              <SingleCar />
            </Route>
            <Route path="/">
              <CarCards />
            </Route>
          </Switch>
        </main>
      </Pane>
    </Router>
  );
}

export default App;
