import React, { FC, useState } from 'react';

import { monthNames } from '@/constants';
import {
  getDayVariant,
  getNumberOfDaysInMonth,
  getRange,
  getTimeFromState,
} from '@/utils/helpers/CalendarHelpers';
import { handleDisabledDays } from '@/utils/helpers/handleDisabledDays';

import Day from '../Day';

import { SevenColGrid } from './styles';
import { CalendarGridProps } from './types';

const CalendarGrid: FC<CalendarGridProps> = ({
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
  isDateByInput,
}) => {
  const [byMonth, setByMonth] = useState<boolean | undefined>(isByMonth);

  const onHandlerSelectMonth = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setByMonth(false);
  };

  return (
    <SevenColGrid>
      {byMonth &&
        monthNames.map((month) => (
          <Day
            onClick={onHandlerSelectMonth}
            key={month}
            day={month.slice(0, 3)}
            variant="default"
            $showWeekend={false}
          />
        ))}

      {!byMonth &&
        getRange(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map(
          (day) => (
            <Day
              onClick={onHandlerSelectDate}
              currentday={day}
              key={day}
              $holidayColor={$holidayColor}
              $showWeekend={showWeekend}
              variant={getDayVariant({
                minDate,
                maxDate,
                startDate,
                endDate,
                day,
                currentYear,
                currentMonth,
                selectedDate,
                defaultValue,
                holidays,
                withRange,
                isDateByInput,
              })}
              day={day}
              disabled={handleDisabledDays({
                minDate,
                maxDate,
                day,
                currentMonth,
                currentYear,
              })}
            />
          )
        )}
    </SevenColGrid>
  );
};

export default CalendarGrid;
