import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './counter/Counter';
import {Calculator} from './calculator/Calculator';
import {RealCalculator} from './real-calculator/RealCalculator';

function App() {
  return (
    <div className={"container"}>
      <RealCalculator/>
    </div>
  );
}

export default App;
