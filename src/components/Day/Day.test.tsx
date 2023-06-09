import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import Day from '.';

import 'jest-styled-components';

describe('rendering Day', () => {
  test('check the day displays as a default variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="default" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', 'transparent');
    expect(day).toHaveStyleRule('color', '#333333');
    expect(day).toHaveStyleRule('border-radius', '0');
  });

  test('check the day displays as a disabled variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="disabled" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', 'transparent');
    expect(day).toHaveStyleRule('color', '#AAAAAA');
    expect(day).toHaveStyleRule('border-radius', '0');
  });

  test('check the day displays as a selected variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="selected" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', '#2F80ED');
    expect(day).toHaveStyleRule('color', '#FFFFFF');
    expect(day).toHaveStyleRule('border-radius', '8px');
  });

  test('check the day displays as a range-start variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="range-start" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', '#82B3F4');
    expect(day).toHaveStyleRule('color', '#FFFFFF');
    expect(day).toHaveStyleRule('border-radius', '8px 0px 0px 8px');
  });

  test('check the day displays as a range-in-between variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="range-in-between" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', '#FFDEFF');
    expect(day).toHaveStyleRule('color', '#333333');
    expect(day).toHaveStyleRule('border-radius', '0');
  });

  test('check the day displays as a range-end variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="range-end" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', '#2F80ED');
    expect(day).toHaveStyleRule('color', '#FFFFFF');
    expect(day).toHaveStyleRule('border-radius', '0px 8px 8px 0px');
  });

  test('check the day displays as a holiday variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="holiday" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', '#FFC0CB');
    expect(day).toHaveStyleRule('color', '#FFFFFF');
    expect(day).toHaveStyleRule('border-radius', '8px');
  });

  test('check the day displays as a weekend variant', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Day variant="weekend" showweekend={false} day={21} />
      </ThemeProvider>
    );

    expect(screen.getByText(21)).toBeInTheDocument();
    const day = screen.getByLabelText('Day');
    expect(day).toHaveStyleRule('background-color', 'transparent');
    expect(day).toHaveStyleRule('color', '#333333');
    expect(day).toHaveStyleRule('border-radius', '8px');
  });
});
