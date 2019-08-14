import React from 'react';
import './App.css';

import SimpleClick from './components/simpleClick'
import AsyncClick from './components/asyncClick'


function App() {


  return (
    <div className="App">
    <div className="sync" >
    <header>Synchronous:</header>
    <SimpleClick />
    </div>
    <div className="async" >
    <header>Asynchronous:</header>
    <AsyncClick />
    </div>
    </div>
  );
}


export default App;
