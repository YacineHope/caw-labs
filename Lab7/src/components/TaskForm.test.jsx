import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm', () => {
    test('renders input fields and submit button', () => {
        render(<TaskForm onAddTask={() => { }} />);

        expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Description (optional)')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
    });

    test('calls onAddTask with input values on submit', () => {
        const mockAddTask = jest.fn();
        render(<TaskForm onAddTask={mockAddTask} />);

        const titleInput = screen.getByPlaceholderText('What needs to be done?');
        const descInput = screen.getByPlaceholderText('Description (optional)');
        const submitBtn = screen.getByRole('button', { name: /add task/i });

        fireEvent.change(titleInput, { target: { value: 'New Task' } });
        fireEvent.change(descInput, { target: { value: 'Task details' } });
        fireEvent.click(submitBtn);

        expect(mockAddTask).toHaveBeenCalledWith({
            title: 'New Task',
            description: 'Task details'
        });

        // Should clear inputs
        expect(titleInput).toHaveValue('');
        expect(descInput).toHaveValue('');
    });

    test('does not submit empty title', () => {
        const mockAddTask = jest.fn();
        render(<TaskForm onAddTask={mockAddTask} />);

        const submitBtn = screen.getByRole('button', { name: /add task/i });
        fireEvent.click(submitBtn);

        expect(mockAddTask).not.toHaveBeenCalled();
    });
});
