import { dayNames } from '@/constants';

import { handleDisabledDays } from './handleDisabledDays';
import { GetDayVariantProps } from './types';

const lastIndexOfTheWeek = 6;
const oneDay = 1;
const oneMonth = 1;
const firstDay = 1;
const firstIndexOfTheWeek = 0;
const startDay = 0;

export const getNumberOfDaysInMonth = (year: number, month: number) =>
  new Date(year, month + oneMonth, startDay).getDate();

export const getSortedDays = (beginningOfTheWeek: string) => {
  if (beginningOfTheWeek === 'monday') {
    const sortedDayNames = dayNames
      .slice(firstDay, dayNames.length)
      .concat(dayNames[firstIndexOfTheWeek]);
    return sortedDayNames;
  }
  return dayNames;
};

export const getMonthTotalDays = (start: number, end: number) => {
  const length = Math.abs(end - start);

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + oneDay,
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
      ? new Date(currentYear, currentMonth, item).getDay() - oneDay
      : new Date(currentYear, currentMonth, item).getDay()
  );

  const prevMonthDays =
    getNumberOfDaysInMonth(currentYear, currentMonth - oneDay) + oneDay;
  const prevMonthRange = getMonthTotalDays(oneDay, prevMonthDays);

  const nextMonthDays =
    getNumberOfDaysInMonth(currentYear, currentMonth + oneDay) - oneDay;
  const nextMonthRange = getMonthTotalDays(oneDay, nextMonthDays);

  if (newResult[firstIndexOfTheWeek] !== firstIndexOfTheWeek) {
    const firstElement = newResult[firstIndexOfTheWeek];
    const lastElement = newResult[newResult.length - oneDay];

    const prevMonthVisibleDays = prevMonthRange
      .slice(prevMonthRange.length - firstElement)
      .map((item) => `-${item.toString()}-`);
    const nextMonthVisibleDays = nextMonthRange
      .slice(firstIndexOfTheWeek, lastIndexOfTheWeek - lastElement)
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
    new Date(currentYear, currentMonth, day).getDay() === firstIndexOfTheWeek ||
    new Date(currentYear, currentMonth, day).getDay() === lastIndexOfTheWeek
  ) {
    return 'weekend';
  }

  if (
    new Date(currentYear, currentMonth, day).getDay() === firstIndexOfTheWeek ||
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
