export interface CalendarProps {
  value: Date;
  variant: string;
  minDate: Date;
  maxDate: Date;
  defaultValue: Date;
  holidays: Date[];
  $textColor: string;
  $holidayColor: string;
  isClearButton: boolean;
  isTodoList: boolean;
  currentmonth?: number;
  currentyear?: number;
  withoutTodo: boolean;
  withRange: boolean;
  startDate?: Date;
  endDate?: Date;

  onHandlerShowButton: (action: boolean) => void;
  onHandlerShowTodoList: (action: boolean) => void;
  onHandlerRangeDate: (value: Date) => void;
}

export type CalendarStylesProps = Pick<
  CalendarProps,
  '$textColor' | 'currentmonth' | 'currentyear'
>;
