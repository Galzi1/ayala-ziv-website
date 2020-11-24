import React, { useState, useEffect } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import Title from './Title';
import TopNavBar from './TopNavBar';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <Title/>
      <TopNavBar/>
      {/* <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header> */}
    </div>
  );
}

export default App;