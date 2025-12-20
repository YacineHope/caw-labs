import React from 'react';

const TaskCard = ({ task, onMoveTask, onDeleteTask }) => {
    const { id, title, description, status } = task;

    return (
        <div className="task-card">
            <div className="task-header">
                <h3>{title}</h3>
                <button
                    className="delete-btn"
                    onClick={() => onDeleteTask(id)}
                    aria-label="Delete task"
                >
                    &times;
                </button>
            </div>
            <p className="task-desc">{description}</p>
            <div className="task-footer">
                <span className={`status-badge ${status.toLowerCase().replace(' ', '-')}`}>
                    {status}
                </span>
                <div className="task-actions">
                    {status !== 'To Do' && (
                        <button onClick={() => onMoveTask(id, 'prev')}>&larr;</button>
                    )}
                    {status !== 'Done' && (
                        <button onClick={() => onMoveTask(id, 'next')}>&rarr;</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
