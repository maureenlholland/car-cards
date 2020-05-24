import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Pane } from 'evergreen-ui';
import Home from './components/Home';
import Header from './components/Header';
import Deck from './components/Deck';
import Car from './components/Car';
import CarForm from './components/CarForm';

// initial view is user projects, if none, start new project button
// users can invite collaborators to their projects

function App() {
  return (
    <Router>
      <Pane className="app">
        <Header />
        <main className="wrapper">
          <Switch>
          <Route path="/car/form">
              <CarForm />
            </Route>
            <Route path="/car/:id">
              <Car />
            </Route>
            <Route path="/:id">
              <Deck />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Pane>
    </Router>
  );
}

export default App;
