export interface CalendarGridProps {
  currentYear: number;
  currentMonth: number;
  minDate: Date;
  maxDate: Date;
  startDate?: Date;
  endDate?: Date;
  selectedDate: Date;
  defaultValue: Date;
  holidays: { month: number; day: number }[];
  withRange: boolean;
  $holidayColor: string;
  beginningOfTheWeek: string;
  showWeekend: boolean;
  isByYear?: boolean;
  isByWeek?: boolean;
  isDateByInput: boolean;

  onHandlerSelectDate: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
