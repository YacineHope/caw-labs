import React, { useState } from 'react';
import './BoxForm.css';

export default function BoxForm({ onAdd }) {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [bg, setBg] = useState('#3b82f6');

  function handleSubmit(e) {
    e.preventDefault();
    const w = parseInt(width, 10) || 0;
    const h = parseInt(height, 10) || 0;
    if (w > 0 && h > 0) {
      onAdd({ width: w, height: h, background: bg });
      setWidth(100); setHeight(100); setBg('#3b82f6');
    }
  }

  return (
    <form className="box-form" onSubmit={handleSubmit}>
      <label>
        Width (px)
        <input type="number" min="1" value={width} onChange={e => setWidth(e.target.value)} />
      </label>

      <label>
        Height (px)
        <input type="number" min="1" value={height} onChange={e => setHeight(e.target.value)} />
      </label>

      <label>
        Background
        <input type="color" value={bg} onChange={e => setBg(e.target.value)} />
      </label>

      <button type="submit" className="submit-btn">Add Box</button>
    </form>
  );
}