import React, { useState } from 'react';

const Hook = () => {
 const [counter, setCounter] = useState(0);
 function increment() {
  setCounter(counter + 1);
 };
 function decrement() {
  setCounter(counter > 0 ? counter - 1 : counter);
 };
 return (
  <div>
   <h2>Counter:{counter}</h2>
   <button onClick={increment}>Plus</button>
   <button onClick={decrement}>Minus</button>
  </div>
 );
};

export default Hook;