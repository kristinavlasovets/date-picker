import React, { FC, useState } from 'react';

import { monthNames } from '@/constants';
import { CalendarDecorator } from '@/utils/decorators/CalendarDecorator';
import {
  getDayVariant,
  getNumberOfDaysInMonth,
  getRange,
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
  beginningOfTheWeek,
  showWeekend,
  isByYear,
  isDateByInput,
  onHandlerSelectDate,
}) => {
  const [byYear, setByYear] = useState<boolean | undefined>(isByYear);

  const onHandlerSelectMonth = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setByYear(false);
  };

  return (
    <SevenColGrid>
      {byYear &&
        monthNames.map((month) => (
          <Day
            onClick={onHandlerSelectMonth}
            key={month}
            day={month.slice(0, 3)}
            variant="default"
            $showWeekend={false}
          />
        ))}

      {!byYear &&
        getRange(
          1,
          getNumberOfDaysInMonth(currentYear, currentMonth) + 1,
          currentMonth,
          currentYear,
          beginningOfTheWeek
        ).map((day, index) => (
          <Day
            onClick={onHandlerSelectDate}
            currentday={day}
            key={index}
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
        ))}
    </SevenColGrid>
  );
};

export default CalendarDecorator(CalendarGrid);
