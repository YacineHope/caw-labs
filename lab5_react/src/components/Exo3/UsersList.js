import './UsersList.css';

export default function UsersList({ users, onDelete }) {
  if (users.length === 0) {
    return <p className="users-empty">No users added yet</p>;
  }

  return (
    <div className="users-list">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <div className="user-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Password:</strong> {'*'.repeat(user.password.length)}</p>
          </div>
          <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}