import React, { useState } from 'react';

function initialCounter() {
 return Math.trunc(Math.random() * 20);
};

const HookUS = () => {
 const [counter, setCounter] = useState(() => initialCounter());
 const [counter2, setCounter2] = useState(() => initialCounter());
 const [state, setState] = useState({
  title: 'State',
  date: Date.now(),
 });
 function increment() {
  setCounter(counter + 1);
 };
 function decrement() {
  setCounter(counter > 0 ? counter - 1 : counter);
 };
 function increment2() {
  setCounter2(prev => prev + 1);
 };
 function decrement2() {
  setCounter2(prev => prev > 0 ? prev - 1 : prev);
 };
 function updateTitle() {
  setState(prev => ({ ...prev, title: 'New Title' }));
 };
 return (
  <div>
   <h5>Counter:{counter}</h5>
   <button onClick={increment}>Plus</button>
   <button onClick={decrement}>Minus</button>
   <h5>Counter2:{counter2}</h5>
   <button onClick={increment2}>Plus2</button>
   <button onClick={decrement2}>Minus2</button>
   <h5>State:<pre>{JSON.stringify(state)}</pre></h5>
   <button onClick={updateTitle}>State</button>
  </div>
 );
};

export default HookUS;