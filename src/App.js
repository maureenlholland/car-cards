import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Heading, Pane } from 'evergreen-ui';
import CarCards from './components/CarCards';
import Car from './components/Car';
import CarForm from './components/CarForm';

const wrapperStyles = { maxWidth: '900px', margin: '0 auto', padding: '40px' };

function App() {
  return (
    <Router>
      <Pane className="app">
        <header>
          <Heading is="h1" size={900} marginTop="40px" textAlign="center">Car Cards</Heading>
        </header>
        <main style={wrapperStyles}>
          <Switch>
          <Route path="/edit">
              <CarForm />
            </Route>
            <Route path="/:id">
              <Car />
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
