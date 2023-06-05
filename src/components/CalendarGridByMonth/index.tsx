import React, { FC } from 'react';

import { CalendarByMonthDecorator } from '@/utils/decorators/CalendarByMonthDecorator';

import CalendarGrid from '../CalendarGrid';
import { CalendarGridProps } from '../CalendarGrid/types';

const CalendarGridByMonth: FC<CalendarGridProps> = ({
  currentYear,
  currentMonth,
  minDate,
  maxDate,
  startDate,
  endDate,
  selectedDate,
  defaultValue,
  holidays,
  withRange,
  $holidayColor,
  showWeekend,
  isByMonth,
  onHandlerSelectDate,
}) => {
  return (
    <CalendarGrid
      currentYear={currentYear}
      currentMonth={currentMonth}
      minDate={minDate}
      maxDate={maxDate}
      startDate={startDate}
      endDate={endDate}
      selectedDate={selectedDate}
      defaultValue={defaultValue}
      holidays={holidays}
      withRange={withRange}
      onHandlerSelectDate={onHandlerSelectDate}
      $holidayColor={$holidayColor}
      showWeekend={showWeekend}
      isByMonth={isByMonth}
      isDateByInput={false}
    />
  );
};

export default CalendarByMonthDecorator(CalendarGridByMonth);
