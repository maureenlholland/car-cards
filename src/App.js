import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Pane } from 'evergreen-ui';
import Header from './components/Header';
import CarCards from './components/CarCards';
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
          <Route path="/form">
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
