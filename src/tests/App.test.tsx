import { describe, expect, test } from 'vitest';
import { waitFor, render, screen } from '@testing-library/react';
import App from '../App.tsx';
import { userEvent } from '@testing-library/user-event';

describe('App', () => {
  test('Should render input field and add button', () => {
    render(<App />);

    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const button = screen.getByRole('button', { name: 'Add' });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Should add task to list when add button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const button = screen.getByRole('button', { name: 'Add' });

    await user.type(input, 'New Task');
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });

  test('Should clear the input field after adding a task', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const button = screen.getByRole('button', { name: 'Add' });

    await user.type(input, 'New Task');
    await user.click(button);

    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  test('Should not add an empty task', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const button = screen.getByRole('button', { name: 'Add' });

    await user.type(input, '    ');
    await user.click(button);

    await waitFor(() => {
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });
  test('Should add a task by pressing the enter key', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });

    await user.type(input, 'New Task{enter}');

    await waitFor(() => {
      expect(screen.queryAllByRole('listitem')).toHaveLength(1);
    });
  });
});
