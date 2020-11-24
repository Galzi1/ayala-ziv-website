import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import logo from '../resources/logo.svg';
import '../styles/App.css';
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
      <TopNavBar currentRoute={currentRoute}/>
      <BrowserRouter basename="/">
        <Route exact path="/" render={
          () => {
            return <Redirect to="/about"/>
          }
        }></Route>
        <Route exact path="/about" render={
          () => {
            setCurrentRoute("/about");
            return <About/>
          }
        }></Route>
        <Route exact path="/shows" render={
          () => {
            setCurrentRoute("/shows");
            return <Shows/>
          }
        }></Route>
        <Route exact path="/media" render={
          () => {
            setCurrentRoute("/media");
            return <Media/>
          }
        }></Route>
        <Route exact path="/contact" render={
          () => {
            setCurrentRoute("/contact");
            return <Contact/>
          }
        }></Route>
      </BrowserRouter>
      {/* <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header> */}
    </div>
  );
}

export default App;