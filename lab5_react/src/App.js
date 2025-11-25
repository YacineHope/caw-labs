import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClickMeButton from './components/Exo1/ClickMeButton';
import ToggleButton from './components/Exo1/ToggleButton';
import ButtonsGroup from './components/Exo1/ButtonsGroup';
import Counter from './components/Exo1/Counter';
import Exercise2 from './components/Exo2/Exercise2';
import Exercise3 from './components/Exo3/Exercise3';
import Exercise4 from './components/Exo4/Exercise4';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 8}}>
        <Link to="/exercise2"><button className="arrow-btn back-btn">→ Exercise 2</button></Link>
        <Link to="/exercise3"><button className="arrow-btn back-btn">→ Exercise 3</button></Link>
        <Link to="/exercise4"><button className="arrow-btn back-btn">→ Exercise 4</button></Link>
      </div>

      <section>
        <h3>1. ClickMe</h3>
        <ClickMeButton />
      </section>

      <section>
        <h3>2. Toggle</h3>
        <ToggleButton />
      </section>

      <section>
        <h3>3. Buttons Group</h3>
        <ButtonsGroup />
      </section>

      <section>
        <h3>4. Counter</h3>
        <Counter />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route path="/exercise3" element={<Exercise3 />} />
        <Route path="/exercise4" element={<Exercise4 />} />
      </Routes>
    </Router>
  );
}
