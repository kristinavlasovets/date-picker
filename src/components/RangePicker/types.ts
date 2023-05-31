export interface RangePickerProps {
  minDate: Date;
  maxDate: Date;
  variant: 'day' | 'week' | 'month';
  holidays: Date[];
  $holidayColor: string;
  $textColor: string;
  defaultStartDate: Date;
  defaultEndDate: Date;
  startDate?: Date;
  endDate?: Date;
}
