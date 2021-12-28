import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/Home';
import Calculator from './screens/Calculator';
import LoginForm from './screens/LoginForm';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/countdown">Count Down 2022</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Routes> and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/countdown">
            <Home />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
