import React from 'react';
import { ThemeProvider } from 'styled-components';

import { dayNames, holidays } from '@/constants';
import { commonTheme } from '@/styles/theme';
import { fireEvent, render, screen } from '@testing-library/react';

import Calendar from '.';

describe('rendering Calendar', () => {
  test('check text', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    expect(screen.getByText('June')).toBeTruthy();
    expect(screen.getByText('2023')).toBeTruthy();
  });

  test('check the calendar renders with the beginning of the week as Monday by default', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    const weekDays = screen.getAllByLabelText('Weekday');
    expect(weekDays).toHaveLength(7);
    weekDays.forEach((weekDay, i) => {
      expect(weekDay).toHaveTextContent(dayNames[i]);
    });
  });

  test('check the calendar renders as month variant by default', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    const monthDays = screen.getAllByLabelText('Day');
    expect(monthDays).toHaveLength(35);
  });

  test('check the calendar does not show previous month when click on the previous icon', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText('Previous'));
    expect(screen.getByText('June')).toBeTruthy();
  });

  test('check the calendar shows next month when click on the next icon', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText('Next'));
    expect(screen.getByText('July')).toBeTruthy();
  });

  test('check the calendar renders as week variant', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="week"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    const oneWeekDays = screen.getAllByLabelText('Day');
    expect(oneWeekDays).toHaveLength(7);
  });

  test('check the calendar shows next week when click on the next icon', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="week"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText('nextWeek'));
    expect(screen.getByText(8)).toBeTruthy();
    const oneWeekDays = screen.getAllByLabelText('Day');
    expect(oneWeekDays).toHaveLength(7);
  });

  test('check the calendar renders as year variant', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="year"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    const oneWeekDays = screen.getAllByLabelText('Day');
    expect(oneWeekDays).toHaveLength(12);
  });

  test('check the month selector shows up when click on displayed month', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    const monthToggle = screen.getByLabelText('monthToggle');
    fireEvent.click(monthToggle);
    expect(screen.getByText('January')).toBeTruthy();
    expect(screen.getByText('February')).toBeTruthy();
    expect(screen.getByText('March')).toBeTruthy();
    expect(screen.getByText('April')).toBeTruthy();
    expect(screen.getByText('May')).toBeTruthy();
    expect(screen.getByText('June')).toBeTruthy();
    expect(screen.getByText('July')).toBeTruthy();
    expect(screen.getByText('August')).toBeTruthy();
    expect(screen.getByText('September')).toBeTruthy();
    expect(screen.getByText('October')).toBeTruthy();
    expect(screen.getByText('November')).toBeTruthy();
    expect(screen.getByText('December')).toBeTruthy();
  });

  test('check the year selector shows up when click on displayed year', () => {
    const currentMonth = 5;
    const currentYear = 2023;

    render(
      <ThemeProvider theme={commonTheme}>
        <Calendar
          value={new Date()}
          variant="month"
          beginningOfTheWeek="sunday"
          minDate={new Date(2023, 5, 2)}
          maxDate={new Date(2023, 7, 23)}
          defaultValue={new Date()}
          holidays={holidays}
          textcolor="#333333"
          holidaycolor="#FFC0CB"
          isClearButton={false}
          isTodoList={true}
          withoutTodo={false}
          withRange={false}
          isDateByInput={false}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onHandlerShowButton={() => ({})}
          onHandlerShowTodoList={() => ({})}
          onHandlerShowCalendar={() => ({})}
          onHandlerRangeDate={() => ({})}
          onHandlerSetDayByInput={() => ({})}
        />
      </ThemeProvider>
    );
    const yearToggle = screen.getByLabelText('yearToggle');
    fireEvent.click(yearToggle);
    expect(screen.getByText(2012)).toBeTruthy();
    expect(screen.getByText(2025)).toBeTruthy();
  });
});
