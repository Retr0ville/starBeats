import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroducingBeatID from './components/IntroducingBeatID';
import Revolution from './components/Revolution';

function App() {
  return (
    <div className="">
      <Header />
      <div className="main-content tw-pt-[113px] md:tw-pt-[65px] lg:tw-pt-[113px]">
        <IntroducingBeatID />
        <Revolution />
      </div>
    </div>
  );
}

export default App;
