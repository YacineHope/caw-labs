import React, { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="toggle">
      <button onClick={() => setClickCount(c => c + 1)}>Toggle</button>
      <p>{clickCount % 2 === 1 ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
}
