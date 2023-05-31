import React, { FC, useState } from 'react';

import { monthNames } from '@/constants/config/monthNames';
import {
  getDayVariant,
  getNumberOfDaysinMonth,
  getRange,
  getTimeFromState,
} from '@/utils/helpers/CalendarHelpers';

import Day from '../Day/Day';

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
        getRange(1, getNumberOfDaysinMonth(currentYear, currentMonth) + 1).map(
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
              })}
              day={day}
              disabled={
                (minDate &&
                  minDate?.getTime() >
                    getTimeFromState(day, currentYear, currentMonth)) ||
                (maxDate &&
                  maxDate?.getTime() <
                    getTimeFromState(day, currentYear, currentMonth))
              }
            />
          )
        )}
    </SevenColGrid>
  );
};

export default CalendarGrid;
