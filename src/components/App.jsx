import { useState } from 'react';
import React from 'react';
import Header from './Header.jsx';
import './App.css';
import WordControl from './WordControl.jsx';
import { useSelector } from 'react-redux';

function App() {
  const {gameWin, gameLose } = useSelector(state => state.wordControl);

  return (
    <React.Fragment>
     {!(gameWin || gameLose) && <Header/>}
      <WordControl/>
    </React.Fragment>
  )
}

export default App
