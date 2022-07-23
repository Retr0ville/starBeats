import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroducingBeatID from './components/IntroducingBeatID';

function App() {
  return (
    <div className="">
      <Header />
      <div className="main-content tw-pt-[113px] md:tw-pt-[65px] lg:tw-pt-[113px]">
        <IntroducingBeatID />
      </div>
    </div>
  );
}

export default App;
