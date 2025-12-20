import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Column from './Column';

const mockTasks = [
    { id: '1', title: 'Task 1', description: 'Desc 1', status: 'To Do' },
    { id: '2', title: 'Task 2', description: 'Desc 2', status: 'To Do' }
];

describe('Column', () => {
    test('renders column title and tasks', () => {
        render(
            <Column
                status="To Do"
                tasks={mockTasks}
                onMoveTask={() => { }}
                onDeleteTask={() => { }}
            />
        );

        expect(screen.getByText(/To Do/)).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument(); // count
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    test('renders empty state message when no tasks', () => {
        render(
            <Column
                status="Done"
                tasks={[]}
                onMoveTask={() => { }}
                onDeleteTask={() => { }}
            />
        );

        expect(screen.getByText('No tasks')).toBeInTheDocument();
    });
});
