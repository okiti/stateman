import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, RootState } from './store/redux';
import './App.css';

function App() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
    <div className="App">
      <div className="counter">
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>one up</button>
      </div>
    </div>
  );
}

export default App;
