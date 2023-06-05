import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { fireEvent, render, screen } from '@testing-library/react';

import DateSelector from '.';

describe('rendering DateSelector', () => {
  test('check the selector value to be empty when rendered', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <DateSelector
          minDate={new Date(2023, 4, 24)}
          maxDate={new Date(2023, 7, 23)}
          onHandlerSelectDate={() => ({})}
          onHandlerShowPopUp={() => ({})}
        />
      </ThemeProvider>
    );

    const selector = screen.getByRole('textbox');
    expect((selector as HTMLInputElement).value).toBe('');
  });

  test('check the calendar appears when click on the calendar icon', () => {
    const mockOnHandlerShowPopUp = jest.fn();
    render(
      <ThemeProvider theme={commonTheme}>
        <DateSelector
          minDate={new Date(2023, 4, 24)}
          maxDate={new Date(2023, 7, 23)}
          onHandlerSelectDate={() => ({})}
          onHandlerShowPopUp={mockOnHandlerShowPopUp}
        />
      </ThemeProvider>
    );

    const calendarButton = screen.getByLabelText('Calendar');
    fireEvent.click(calendarButton);
    expect(mockOnHandlerShowPopUp).toBeCalledTimes(1);
  });

  test('check the date clears up when clicked on the clear icon', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <DateSelector
          minDate={new Date(2023, 4, 24)}
          maxDate={new Date(2023, 7, 23)}
          onHandlerSelectDate={() => ({})}
          onHandlerShowPopUp={() => ({})}
        />
      </ThemeProvider>
    );

    const clearButton = screen.getByLabelText('Clear the date');
    fireEvent.click(clearButton);
    const selector = screen.getByRole('textbox');
    expect((selector as HTMLInputElement).value).toBe('');
  });

  test('check an error "Incorrect data. Please, use dd/mm/yyyy format." throws when enter the incorrect value', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <DateSelector
          minDate={new Date(2023, 4, 24)}
          maxDate={new Date(2023, 7, 23)}
          onHandlerSelectDate={() => ({})}
          onHandlerShowPopUp={() => ({})}
        />
      </ThemeProvider>
    );

    const selector = screen.getByRole('textbox');
    fireEvent.change(selector, { target: { value: '0' } });
    expect(
      screen.getByText('Incorrect data. Please, use dd/mm/yyyy format.')
    ).toBeTruthy();
  });

  test('check an error "Current date is out of range." throws when entered date is out of range', () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <DateSelector
          minDate={new Date(2023, 4, 24)}
          maxDate={new Date(2023, 7, 23)}
          onHandlerSelectDate={() => ({})}
          onHandlerShowPopUp={() => ({})}
        />
      </ThemeProvider>
    );

    const selector = screen.getByRole('textbox');
    fireEvent.change(selector, { target: { value: '24/08/2023' } });
    expect(screen.getByText('Current date is out of range.')).toBeTruthy();
  });
});
