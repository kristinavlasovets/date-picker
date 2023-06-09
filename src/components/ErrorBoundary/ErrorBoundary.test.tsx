import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import ErrorBoundary from './index';

describe('rendering ErrorBoundary', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <ErrorBoundary>Something went wrong.</ErrorBoundary>
      </ThemeProvider>
    );

    expect(screen.getByText('Something went wrong.')).toBeTruthy();
  });
});
