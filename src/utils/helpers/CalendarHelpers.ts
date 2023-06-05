import { dayNames } from '@/constants';

import { handleDisabledDays } from './handleDisabledDays';
import { GetDayVariantProps } from './types';

const lastIndexOfTheWeek = 6;

export const getNumberOfDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

export const getSortedDays = (beginningOfTheWeek: string) => {
  if (beginningOfTheWeek === 'monday') {
    const sortedDayNames = dayNames
      .slice(1, dayNames.length)
      .concat(dayNames[0]);
    return sortedDayNames;
  }
  return dayNames;
};

export const getMonthTotalDays = (start: number, end: number) => {
  const length = Math.abs(end - start);

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: start }
  );

  return result;
};

export const getRange = (
  start: number,
  end: number,
  currentMonth: number,
  currentYear: number,
  beginningOfTheWeek: string
) => {
  const result = getMonthTotalDays(start, end);

  const newResult = result.map((item) =>
    beginningOfTheWeek === 'monday'
      ? new Date(currentYear, currentMonth, item).getDay() - 1
      : new Date(currentYear, currentMonth, item).getDay()
  );

  const prevMonthDays =
    getNumberOfDaysInMonth(currentYear, currentMonth - 1) + 1;
  const prevMonthRange = getMonthTotalDays(1, prevMonthDays);

  const nextMonthDays =
    getNumberOfDaysInMonth(currentYear, currentMonth + 1) - 1;
  const nextMonthRange = getMonthTotalDays(1, nextMonthDays);

  if (newResult[0] !== 0) {
    const firstElement = newResult[0];
    const lastElement = newResult[newResult.length - 1];

    const prevMonthVisibleDays = prevMonthRange
      .slice(prevMonthRange.length - firstElement)
      .map((item) => `-${item.toString()}-`);
    const nextMonthVisibleDays = nextMonthRange
      .slice(0, lastIndexOfTheWeek - lastElement)
      .map((item) => `-${item.toString()}-`);
    const preRangedResult = prevMonthVisibleDays.concat(result);
    const rangedResult = preRangedResult.concat(nextMonthVisibleDays);

    return rangedResult;
  }

  return result;
};

export const getTimeFromState = (
  day: number,
  currentYear: number,
  currentMonth: number
) => new Date(currentYear, currentMonth, day).getTime();

export const getDayVariant = (options: GetDayVariantProps) => {
  const {
    day,
    minDate,
    maxDate,
    startDate,
    endDate,
    currentMonth,
    currentYear,
    selectedDate,
    defaultValue,
    holidays,
    withRange,
    isDateByInput,
  } = options;

  if (
    holidays
      .map(({ day, month }) => getTimeFromState(day, currentYear, month))
      .includes(new Date(currentYear, currentMonth, day).getTime())
  ) {
    return 'holiday';
  }

  if (
    isDateByInput &&
    withRange &&
    selectedDate.getTime() ===
      new Date(currentYear, currentMonth, day).getTime() &&
    defaultValue === startDate
  ) {
    return 'selected';
  }

  if (
    !isDateByInput &&
    withRange &&
    selectedDate.getTime() ===
      new Date(currentYear, currentMonth, day).getTime() &&
    defaultValue === startDate
  ) {
    return 'range-start';
  }

  if (
    withRange &&
    defaultValue.getDate() === day &&
    defaultValue.getMonth() === currentMonth &&
    defaultValue.getFullYear() === currentYear &&
    startDate === defaultValue &&
    selectedDate === defaultValue
  ) {
    return 'range-start';
  }

  if (
    isDateByInput &&
    withRange &&
    selectedDate.getTime() ===
      new Date(currentYear, currentMonth, day).getTime()
  ) {
    return 'selected';
  }

  if (
    !isDateByInput &&
    withRange &&
    selectedDate.getTime() ===
      new Date(currentYear, currentMonth, day).getTime()
  ) {
    return 'range-end';
  }

  if (
    withRange &&
    defaultValue.getDate() === day &&
    defaultValue.getMonth() === currentMonth &&
    defaultValue.getFullYear() === currentYear &&
    endDate === defaultValue &&
    selectedDate === defaultValue
  ) {
    return 'range-end';
  }

  if (
    !withRange &&
    defaultValue.getDate() === day &&
    defaultValue.getMonth() === currentMonth &&
    defaultValue.getFullYear() === currentYear &&
    selectedDate === defaultValue
  ) {
    return 'selected';
  }

  if (
    !withRange &&
    selectedDate.getTime() ===
      new Date(currentYear, currentMonth, day).getTime()
  ) {
    return 'selected';
  }

  if (
    withRange &&
    startDate &&
    startDate?.getTime() < getTimeFromState(day, currentYear, currentMonth) &&
    endDate &&
    endDate?.getTime() > getTimeFromState(day, currentYear, currentMonth)
  ) {
    return 'range-in-between';
  }

  if (
    new Date(currentYear, currentMonth, day).getDay() === 0 ||
    new Date(currentYear, currentMonth, day).getDay() === lastIndexOfTheWeek
  ) {
    return 'weekend';
  }

  if (
    new Date(currentYear, currentMonth, day).getDay() === 0 ||
    new Date(currentYear, currentMonth, day).getDay() === lastIndexOfTheWeek
  ) {
    return 'holiday';
  }

  if (
    handleDisabledDays({ minDate, maxDate, day, currentMonth, currentYear })
  ) {
    return 'disabled';
  }

  return 'default';
};
