import React, { useState, useEffect } from 'react';

const HookUEF = () => {
 const [type, setType] = useState('users');
 const [pos, setPos] = useState({
  x: 0,
  y: 0,
 });

 const mouseHandler = (e) => {
  setPos({
   x: e.clientX,
   y: e.clientY,
  })
 };

 useEffect(() => {
  console.log('type changed');
  return () => console.log('clean');
 }, [type]);

 // useEffect(() => {
 //  console.log('Mounted');
 //  window.addEventListener('mousemove', mouseHandler);
 // }, []);

 return (
  <div>
   <h5>Resourse: {type}</h5>
   <button onClick={() => setType('users')}>Users</button>
   <button onClick={() => setType('todo')}>ToDo</button>
   <button onClick={() => setType('posts')}>Posts</button>
   Position:<pre>{JSON.stringify(pos)}</pre>
  </div>
 );
};

export default HookUEF;