export interface GetDayVariantProps {
  day: number;
  minDate: Date;
  maxDate: Date;
  startDate?: Date;
  endDate?: Date;
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  defaultValue: Date;
  holidays: { month: number; day: number }[];
  withRange: boolean;
  isDateByInput: boolean;
}
