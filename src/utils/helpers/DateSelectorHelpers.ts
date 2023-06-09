import { getNumberOfDaysInMonth } from './CalendarHelpers';

export const getValidatedDate = (inputValue: string): boolean => {
  const validDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!validDateRegex.test(inputValue)) {
    return false;
  }

  const totalMonths = 12;
  const firstMonth = 1;
  const firstDay = 1;

  const [day, month, year] = inputValue.split('/').map((item) => Number(item));

  if (month < firstMonth || month > totalMonths) {
    return false;
  }

  if (
    day < firstDay ||
    day > getNumberOfDaysInMonth(year, month - firstMonth)
  ) {
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
