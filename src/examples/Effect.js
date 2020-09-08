import React, { useState, useEffect } from 'react';


export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMount
    console.log('Mount');

    // componentWillUnmount
    return () => {
      console.log('Unmount')
    }
  }, []);

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