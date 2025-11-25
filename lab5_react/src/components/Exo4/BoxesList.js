import React from 'react';
import './BoxesList.css';

export default function BoxesList({ boxes, onRemove }) {
  if (!boxes.length) return <p className="no-boxes">No boxes yet</p>;

  return (
    <div className="boxes-grid">
      {boxes.map(b => (
        <div key={b.id} className="box-item">
          <div
            className="box-preview"
            style={{ width: b.width + 'px', height: b.height + 'px', background: b.background }}
          />
          <div className="box-meta">
            <div>W: {b.width}px H: {b.height}px</div>
            <button className="delete-btn" onClick={() => onRemove(b.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}