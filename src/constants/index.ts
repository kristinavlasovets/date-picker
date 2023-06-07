import { Colors } from '@/types';

export enum ButtonText {
  text = 'Clear',
}

export enum CalendarText {
  prevAlt = 'Previous',
  nextAlt = 'Next',
  hideText = 'Hide weekends',
  showText = 'Show weekends',
  weekdayLabel = 'Weekday',
}

export enum DayText {
  dayLabel = 'Day',
}

export enum DateSelectorText {
  formatError = 'Incorrect data. Please, use dd/mm/yyyy format.',
  rangeError = 'Current date is out of range.',
  calendarAlt = 'Calendar',
  clearAlt = 'Clear the date',
  inputType = 'text',
  placeholder = 'Choose Date',
}

export enum DayPickerText {
  titleDefault = 'Date',
  titleFrom = 'From',
  titleTo = 'To',
}

export enum ErrorBoundaryText {
  message = 'Something went wrong.',
}

export enum TodoItemText {
  inputType = 'checkbox',
  deleteAlt = 'Delete Todo',
}

export enum TodoListText {
  inputType = 'text',
  title = 'tasks',
  placeholder = 'Type new Todo...',
  closeAlt = 'Close Todo list',
  clearAlt = 'Clear Todo',
  addAlt = 'Add Todo',
}

export const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const holidays = [
  { month: 12, day: 2 },
  { month: 12, day: 1 },
  { month: 10, day: 7 },
  { month: 8, day: 17 },
  { month: 6, day: 3 },
  { month: 4, day: 9 },
  { month: 4, day: 1 },
  { month: 3, day: 2 },
  { month: 2, day: 15 },
  { month: 2, day: 8 },
  { month: 1, day: 23 },
];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const years = [
  2012, 2013, 2014, 2015, 2016, 2017, 2020, 2021, 2022, 2023, 2024, 2025,
];

export const DayItemVariants = {
  default: {
    background: 'transparent',
    borderRadius: 0,
    color: Colors.DARK_GRAY,
  },
  hover: {
    background: Colors.LIGHT_GRAY,
    borderRadius: '8px',
    color: Colors.DARK_GRAY,
  },
  disabled: {
    background: 'transparent',
    borderRadius: 0,
    color: Colors.GRAY,
  },
  selected: {
    background: Colors.DARK_BLUE,
    borderRadius: '8px',
    color: Colors.WHITE,
  },
  'range-start': {
    background: Colors.BLUE,
    borderRadius: '8px 0px 0px 8px',
    color: Colors.WHITE,
  },
  'range-in-between': {
    background: Colors.PURPLE,
    borderRadius: 0,
    color: Colors.DARK_GRAY,
  },
  'range-end': {
    background: Colors.DARK_BLUE,
    borderRadius: '0px 8px 8px 0px',
    color: Colors.WHITE,
  },
  holiday: {
    background: Colors.PINK,
    borderRadius: '8px',
    color: Colors.WHITE,
  },
  weekend: {
    background: 'transparent',
    borderRadius: '8px',
    color: Colors.DARK_BLUE,
  },
};
