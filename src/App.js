import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <p className="title">
        <span className="first">אילה זיו</span>
        <span className="first">Ayala Ziv</span>
      </p>
      <p className="title">
        <span className="second">צ'לנית וזמרת</span>
        <span className="second">Cellist and Singer</span>
      </p>

      <div class="topnav">
        <a class="active" href="/about">אודות</a>
        <a href="/shows">הופעות</a>
        <a href="/media">מדיה</a>
        <a href="/contact">צרו קשר</a>
      </div>
      
      {/* <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header> */}
    </div>
  );
}

export default App;