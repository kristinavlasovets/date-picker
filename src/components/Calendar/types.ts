export interface CalendarProps {
  value: Date;
  variant: string;
  beginningOfTheWeek: string;
  minDate: Date;
  maxDate: Date;
  defaultValue: Date;
  holidays: { month: number; day: number }[];
  textcolor: string;
  holidaycolor: string;
  isClearButton: boolean;
  isTodoList: boolean;
  currentMonth?: number;
  currentYear?: number;
  withoutTodo: boolean;
  withRange: boolean;
  startDate?: Date;
  endDate?: Date;
  isDateByInput: boolean;

  onHandlerShowButton: (action: boolean) => void;
  onHandlerShowTodoList: (action: boolean) => void;
  onHandlerShowCalendar: () => void;
  onHandlerRangeDate: (value: Date) => void;
  onHandlerSetDayByInput: (action: boolean) => void;
}

export type CalendarStylesProps = Pick<
  CalendarProps,
  'textcolor' | 'currentMonth' | 'currentYear'
>;

export interface IsPopUpOpenStateProps {
  isYearOpen: boolean;
  isMonthOpen: boolean;
}
