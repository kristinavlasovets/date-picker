import { dayNames } from '@/constants/config/dayNames';

export const getNumberOfDaysinMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (year: number, month: number) => {
  const dayIndex = new Date(year, month, 1).getDay();
  const firstHalf = dayNames.slice(dayIndex);
  return [...firstHalf, ...dayNames.slice(0, dayIndex)];
};

export const getRange = (start: number, end: number) => {
  const length = Math.abs((end - start) / 1);

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: start }
  );

  return result;
};

export const getTimeFromState = (
  day: number,
  currentYear: number,
  currentMonth: number
) => {
  return new Date(currentYear, currentMonth, day).getTime();
};

interface GetDayVariantProps {
  day: number;
  minDate?: Date;
  maxDate?: Date;
  startDate?: Date;
  endDate?: Date;
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  defaultValue: Date;
  holidays: Date[];
  withRange: boolean;
}

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
  } = options;

  if (
    holidays
      .map((item) => item.getTime())
      .includes(new Date(currentYear, currentMonth, day).getTime())
  ) {
    return 'holiday';
  }

  if (
    (minDate &&
      minDate?.getTime() > getTimeFromState(day, currentYear, currentMonth)) ||
    (maxDate &&
      maxDate?.getTime() < getTimeFromState(day, currentYear, currentMonth))
  ) {
    return 'disabled';
  }

  if (
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
    new Date(currentYear, currentMonth, day).getDay() === 6
  ) {
    return 'weekend';
  }

  if (
    new Date(currentYear, currentMonth, day).getDay() === 0 ||
    new Date(currentYear, currentMonth, day).getDay() === 6
  ) {
    return 'holiday';
  }

  if (
    (minDate &&
      minDate?.getTime() > getTimeFromState(day, currentYear, currentMonth)) ||
    (maxDate &&
      maxDate?.getTime() < getTimeFromState(day, currentYear, currentMonth))
  ) {
    return 'disabled';
  }

  return 'default';
};
