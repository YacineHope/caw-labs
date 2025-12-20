import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import './App.css';

const STATUSES = ['To Do', 'In Progress', 'Done'];

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanban-tasks');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Welcome to Kanban!', description: 'Try moving this task.', status: 'To Do' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, description }) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: 'To Do'
    };
    setTasks([...tasks, newTask]);
  };

  const moveTask = (id, direction) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) return task;

      const currentIndex = STATUSES.indexOf(task.status);
      let newIndex = currentIndex;

      if (direction === 'next' && currentIndex < STATUSES.length - 1) {
        newIndex++;
      } else if (direction === 'prev' && currentIndex > 0) {
        newIndex--;
      } else if (STATUSES.includes(direction)) {
        // Allow direct status setting if direction is a status string
        return { ...task, status: direction };
      }

      return { ...task, status: STATUSES[newIndex] };
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Kanban Board</h1>
      </header>

      <main>
        <div className="form-container">
          <TaskForm onAddTask={addTask} />
        </div>

        <div className="board">
          {STATUSES.map(status => (
            <Column
              key={status}
              status={status}
              tasks={tasks.filter(t => t.status === status)}
              onMoveTask={moveTask}
              onDeleteTask={deleteTask}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
