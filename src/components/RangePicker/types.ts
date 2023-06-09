export interface RangePickerProps {
  minDate: Date;
  maxDate: Date;
  variant: 'day' | 'week' | 'month';
  beginningOfTheWeek: 'sunday' | 'monday';
  holidays: { month: number; day: number }[];
  holidaycolor: string;
  textcolor: string;
  defaultStartDate: Date;
  defaultEndDate: Date;
  startDate?: Date;
  endDate?: Date;
}
