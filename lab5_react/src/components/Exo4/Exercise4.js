import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoxForm from './BoxForm';
import BoxesList from './BoxesList';
import './Exercise4.css';

export default function Exercise4() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    setBoxes(b => [...b, { id: Date.now(), ...box }]);
  }

  function removeBox(id) {
    setBoxes(b => b.filter(x => x.id !== id));
  }

  return (
    <div className="exercise4">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Exercise 4</h2>
        <Link to="/"><button className="arrow-btn back-btn">← Back</button></Link>
      </div>

      <section>
        <h3>Add a box</h3>
        <BoxForm onAdd={addBox} />
      </section>

      <section>
        <h3>Preview</h3>
        <BoxesList boxes={boxes} onRemove={removeBox} />
      </section>
    </div>
  );
}