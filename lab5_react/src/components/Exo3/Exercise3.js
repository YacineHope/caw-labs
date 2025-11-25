import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import UsersList from './UsersList';
import './Exercise3.css';

export default function Exercise3() {
  const [users, setUsers] = useState([]);

  function addUser(username, password) {
    setUsers([...users, { id: Date.now(), username, password }]);
  }

  function deleteUser(id) {
    setUsers(users.filter(u => u.id !== id));
  }

  return (
    <div className="exercise3">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Exercise 3</h2>
        <Link to="/"><button className="arrow-btn back-btn">← Back</button></Link>
      </div>

      <section>
        <h3>Authentication Form</h3>
        <AuthForm onSubmit={addUser} />
      </section>

      <section>
        <h3>Users List</h3>
        <UsersList users={users} onDelete={deleteUser} />
      </section>
    </div>
  );
}