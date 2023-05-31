export interface DayPickerProps {
  defaultValue: Date;
  minDate: Date;
  maxDate: Date;
  variant: 'day' | 'week' | 'month';
  holidays: Date[];
  $holidayColor: string;
  $textColor: string;
  title?: string;
  isClearButton: boolean;
  withoutTodo: boolean;
  withRange: boolean;
  startDate?: Date;
  endDate?: Date;

  onHandlerShowButton: (action: boolean) => void;
  onHandlerRangeDate: (value: Date) => void;
}