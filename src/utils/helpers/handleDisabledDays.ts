import { getTimeFromState } from './CalendarHelpers';

interface HandleDisabledDaysProps {
  minDate: Date;
  maxDate: Date;
  day: number;
  currentYear: number;
  currentMonth: number;
}

export const handleDisabledDays = (options: HandleDisabledDaysProps) => {
  const { minDate, maxDate, day, currentMonth, currentYear } = options;

  return (
    minDate.getTime() > getTimeFromState(day, currentYear, currentMonth) ||
    maxDate.getTime() < getTimeFromState(day, currentYear, currentMonth) ||
    typeof day === 'string'
  );
};
