import React, { useState } from 'react';
import './DisplayTab.css';

export default function DisplayTab({ items = ["hello", "world", "from", "react"] }) {
  const [list, setList] = useState([...items]);

  function removeAt(index) {
    setList(l => l.filter((_, i) => i !== index));
  }

  if (list.length === 0) {
    return <p className="displaytab empty">No elements</p>;
  }

  return (
    <ul className="displaytab">
      {list.map((item, i) => (
        <li key={i} onClick={() => removeAt(i)}>
          Element {i + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}