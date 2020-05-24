import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Pane } from 'evergreen-ui';
import Auth from './components/auth/Auth';
import Home from './components/Home';
import Header from './components/Header';
import Deck from './components/Deck';
import Car from './components/car/Car';
import CarForm from './components/car/form/CarForm';
import { users } from './mockData/users';

// initial view is user projects, if none, start new project button
// users can invite collaborators to their projects

function App() {
  // Test no user 
  // const user = null;
  // Test legit user
  const user = users[0];

  return (
    <Router>
      <Pane className="app">
        <Header />
        <main className="wrapper">
          {!user ? <Auth /> : (
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
          )}
        </main>
      </Pane>
    </Router>
  );
}

export default App;
