import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock localStorage
const localStorageMock = (function () {
    let store = {};
    return {
        getItem: jest.fn(key => store[key] || null),
        setItem: jest.fn((key, value) => { store[key] = value.toString(); }),
        clear: jest.fn(() => { store = {}; })
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('App', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    test('renders initial state', () => {
        render(<App />);
        expect(screen.getByText('Kanban Board')).toBeInTheDocument();
        expect(screen.getByText(/To Do/)).toBeInTheDocument();
        expect(screen.getByText(/In Progress/)).toBeInTheDocument();
        expect(screen.getByText(/Done/)).toBeInTheDocument();
        // Default welcome task
        expect(screen.getByText('Welcome to Kanban!')).toBeInTheDocument();
    });

    test('can add a new task', () => {
        render(<App />);

        const titleInput = screen.getByPlaceholderText('What needs to be done?');
        const submitBtn = screen.getByRole('button', { name: /add task/i });

        fireEvent.change(titleInput, { target: { value: 'New Integration Task' } });
        fireEvent.click(submitBtn);

        expect(screen.getByText('New Integration Task')).toBeInTheDocument();
    });
});
