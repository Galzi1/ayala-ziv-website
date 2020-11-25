import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Redirect, useRouteMatch, NavLink} from "react-router-dom";
import logo from '../resources/logo.svg';
import '../styles/App.css';
import '../styles/TopNavBar.css';
import Title from './Title';
import TopNavBar from './TopNavBar';
import About from './About';
import Shows from './Shows';
import Media from './Media';
import Contact from './Contact';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <Title/>
      {/* <TopNavBar currentRoute={currentRoute}/> */}
      <BrowserRouter basename="/">
        <div className="topnav">
            <NavLink to="/about" activeClassName="active">אודות</NavLink>
            <NavLink to="/shows" activeClassName="active">הופעות</NavLink>
            <NavLink to="/media" activeClassName="active">מדיה</NavLink>
            <NavLink to="/contact" activeClassName="active">צרו קשר</NavLink>
        </div>
        <Route exact path="/" render={
          () => {
            return <Redirect to="/about"/>
          }
        }></Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/shows">
          <Shows/>
        </Route>
        <Route exact path="/media">
          <Media/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </BrowserRouter>
      {/* <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header> */}
    </div>
  );
}

export default App;