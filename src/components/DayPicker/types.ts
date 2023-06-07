export interface DayPickerProps {
  defaultValue: Date;
  minDate: Date;
  maxDate: Date;
  variant: 'day' | 'week' | 'month';
  beginningOfTheWeek: 'sunday' | 'monday';
  holidays: { month: number; day: number }[];
  holidaycolor: string;
  textcolor: string;
  title?: string;
  isClearButton: boolean;
  withoutTodo: boolean;
  withRange: boolean;
  startDate?: Date;
  endDate?: Date;

  onHandlerShowButton: (action: boolean) => void;
  onHandlerRangeDate: (value: Date) => void;
}
