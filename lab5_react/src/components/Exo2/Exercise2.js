import React from 'react';
import { Link } from 'react-router-dom';
import DisplayTab from './DisplayTab';
import './Exercise2.css';

export default function Exercise2() {
  const tabA = ['apple', 'banana', 'cherry'];
  const tabB = ['red', 'green', 'blue', 'yellow'];

  return (
    <div className="exercise2">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Exercise 2</h2>
        <Link to="/"><button className="arrow-btn back-btn">← Back</button></Link>
      </div>

      <section>
        <h3>DisplayTab A</h3>
        <DisplayTab items={tabA} />
      </section>

      <section>
        <h3>DisplayTab B</h3>
        <DisplayTab items={tabB} />
      </section>

      <p className="hint">Click an item to remove it from the list.</p>
    </div>
  );
}