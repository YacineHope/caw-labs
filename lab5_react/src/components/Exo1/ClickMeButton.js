
import React, { useState } from 'react';
import './ClickMeButton.css';
export default function ClickMeButton() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="clickme">
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}
