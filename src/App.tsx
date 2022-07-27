import React from 'react';
import './App.css';
import Faq from './components/FAQ/Faq';
import Header from './components/Header';
import IntroducingBeatID from './components/IntroducingBeatID';
import Members from './components/Members';
import Revolution from './components/Revolution';
import Start from './components/Start';

function App() {
  return (
    <div className="">
      <Header />
      <div className="main-content tw-pt-[113px] md:tw-pt-[65px] lg:tw-pt-[113px]">
        <IntroducingBeatID />
        <Revolution />
        <Start />
        <Members />
        <Faq />
      </div>
    </div>
  );
}

export default App;
