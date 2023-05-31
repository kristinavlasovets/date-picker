export interface CalendarGridProps {
  currentYear: number;
  currentMonth: number;
  minDate: Date;
  maxDate: Date;
  startDate?: Date;
  endDate?: Date;
  selectedDate: Date;
  defaultValue: Date;
  holidays: Date[];
  withRange: boolean;
  $holidayColor: string;
  showWeekend: boolean;
  isByMonth?: boolean;
  isByWeek?: boolean;

  onHandlerSelectDate: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
