import React, { useState } from 'react';
import './ButtonsGroup.css';

export default function ButtonsGroup() {
  const [lastClicked, setLastClicked] = useState(null);
  return (
    <div className="btn-group">
      <div className="btn-row">
        <button onClick={() => setLastClicked(1)}>Button1</button>
        <button onClick={() => setLastClicked(2)}>Button2</button>
        <button onClick={() => setLastClicked(3)}>Button3</button>
      </div>
      {lastClicked !== null && <p>Button #{lastClicked} was clicked</p>}
    </div>
  );
}