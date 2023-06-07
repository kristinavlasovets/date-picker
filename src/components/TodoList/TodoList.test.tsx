import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { fireEvent, render, screen } from '@testing-library/react';

import TodoList from '.';

describe('rendering TodoList', () => {
  test('check the ability to add a new todo', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <TodoList
          selectedDate={new Date(2023, 5, 21)}
          onHandlerShowTodoList={() => ({})}
        />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Add Todo')).toBeInTheDocument();
  });

  test('check the ability to clear just typed todo', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <TodoList
          selectedDate={new Date(2023, 5, 21)}
          onHandlerShowTodoList={() => ({})}
        />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Clear Todo')).toBeInTheDocument();
  });

  test('check the ability to close todo list', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <TodoList
          selectedDate={new Date(2023, 5, 21)}
          onHandlerShowTodoList={() => ({})}
        />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Close Todo list')).toBeInTheDocument();
  });

  test('check the corresponding todo list is rendering due to the selected date', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <TodoList
          selectedDate={new Date(2023, 5, 21)}
          onHandlerShowTodoList={() => ({})}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('6/21/2023')).toBeTruthy();
  });
});
