import React from 'react';
import countStore from './store/zustand';
import logo from './logo.svg';
import './App.css';

function App() {
  const { count, inc } = countStore((state) => state)
  return (
    <div className="App">
      <div className="counter">
        <span>{count}</span>
        <button onClick={inc}>one up</button>
      </div>
    </div>
  );
}

export default App;
