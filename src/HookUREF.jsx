import React, { useState, useEffect, useRef } from 'react';

const HookUREF = () => {
 // const [renderCount, setRenderCount] = useState(1);
 const [val, setVal] = useState('initial');
 const renderCount = useRef(1);
 const inputRef = useRef(null);
 const prevVal = useRef('');

 useEffect(() => {
  console.log(inputRef.current.value);
  renderCount.current++;
 });

 function focus() {
  inputRef.current.focus();
 };

 useEffect(() => {
  prevVal.current = val;
 }, [val]);

 return (
  <div>
   <h4>State prev {prevVal.current}</h4>
   <h5>Renders count: {renderCount.current}</h5>
   <input ref={inputRef} type="text" onChange={e => setVal(e.target.value)} value={val} />
   <button onClick={focus}>Button Ref</button>
  </div>
 );
};

export default HookUREF;