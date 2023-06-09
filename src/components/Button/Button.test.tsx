import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('rendering Button', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Button onHandlerClearDate={() => ({})} />
      </ThemeProvider>
    );

    expect(screen.getByText('Clear')).toBeTruthy();
  });
});
