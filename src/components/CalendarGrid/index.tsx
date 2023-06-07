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
  holidaycolor,
  beginningOfTheWeek,
  showWeekend,
  isByYear,
  isDateByInput,
  onHandlerSelectDate,
}) => {
  const [byYear, setByYear] = useState<boolean | undefined>(isByYear);

  const oneDay = 1;
  const firstIndexOfMonth = 0;
  const fourthIndexOfMonth = 3;

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
            day={month.slice(firstIndexOfMonth, fourthIndexOfMonth)}
            variant="default"
            showweekend={false}
          />
        ))}

      {!byYear &&
        getRange(
          oneDay,
          getNumberOfDaysInMonth(currentYear, currentMonth) + oneDay,
          currentMonth,
          currentYear,
          beginningOfTheWeek
        ).map((day, index) => (
          <Day
            onClick={onHandlerSelectDate}
            currentday={day}
            key={index}
            holidaycolor={holidaycolor}
            showweekend={showWeekend}
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
