import React, { useState } from 'react';

function initialCounter() {
 console.log('some calculation');
 return Math.trunc(Math.random() * 20);
};

const Hook = () => {
 const [counter, setCounter] = useState(() => initialCounter());

 return (
  <div>
   <h5>Counter:{counter}</h5>
  </div>
 );
};

export default Hook;