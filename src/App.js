import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Rooms from './components/Rooms/Rooms';
import ShowData from './components/ShowData/ShowData';



function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/destination">
            <Header></Header>
            <Destination></Destination>
          </Route>
          <Route path="/rooms">
            <Rooms></Rooms>
          </Route>
          <Route path="/show">
            <Rooms></Rooms>
            <ShowData></ShowData>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home />
          </Route>
          <Route path="*">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
