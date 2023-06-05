import { getNumberOfDaysInMonth } from './CalendarHelpers';

export const getValidatedDate = (inputValue: string): boolean => {
  const validDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!validDateRegex.test(inputValue)) {
    return false;
  }

  const [day, month, year] = inputValue.split('/').map((item) => Number(item));

  if (month < 1 || month > 12) {
    return false;
  }

  if (day < 1 || day > getNumberOfDaysInMonth(year, month - 1)) {
    return false;
  }
  return true;
};

export const getDateInRange = (
  date: Date,
  minDate: Date,
  maxDate: Date
): boolean => {
  if (
    date.getTime() >= minDate.getTime() &&
    date.getTime() <= maxDate.getTime()
  ) {
    return true;
  }
  return false;
};
