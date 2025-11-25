import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Inc</button>
      <button onClick={() => setCount(c => c - 1)}>Dec</button>
    </div>
  );
}