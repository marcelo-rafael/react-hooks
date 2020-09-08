import React, { useState } from 'react';


export default function State() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(currentCount => currentCount + 1);
  }

  function remove() {
    setCount(currentCount => currentCount - 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={add}>Increment</button>
      <button onClick={remove}>Remove</button>
    </>
  )
}