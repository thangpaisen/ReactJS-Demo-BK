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
import Detail from "./screens/Detail";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Customers from "./screens/Customers";

function App() {
  const [userInfo, setUserInfo] = useState(() => {
    let userInfo = localStorage.getItem("UserInfo");
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return null;
  });
  return (
    <>
    {userInfo?
    <Router>
      <div>
        <ResponsiveAppBar/>
        <Switch>
          <Route path="/customers/:id">
            <Detail />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    :<LoginForm />}
    </>
  );
}

export default App;
