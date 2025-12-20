import React from 'react';
import TaskCard from './TaskCard';

const Column = ({ status, tasks, onMoveTask, onDeleteTask }) => {
    return (
        <div className="column">
            <h2 className="column-title">
                {status}
                <span className="task-count">{tasks.length}</span>
            </h2>
            <div className="task-list">
                {tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onMoveTask={onMoveTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
                {tasks.length === 0 && (
                    <div className="empty-column-state">
                        No tasks
                    </div>
                )}
            </div>
        </div>
    );
};

export default Column;
