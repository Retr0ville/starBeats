import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroducingBeatID from './components/IntroducingBeatID';

function App() {
  return (
    <div className="">
      <Header />
      <div className="main-content">
        <IntroducingBeatID />
      </div>
    </div>
  );
}

export default App;
