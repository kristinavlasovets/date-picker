import React, { FC, useEffect, useMemo, useState } from 'react';

import MyNextSvg from '@/assets/icons/next.svg';
import MyPrevSvg from '@/assets/icons/prev.svg';
import { CalendarByWeekDecorator } from '@/utils/decorators/CalendarByWeekDecorator';
import {
  getDayVariant,
  getNumberOfDaysInMonth,
  getRange,
  getTimeFromState,
} from '@/utils/helpers/CalendarHelpers';
import { handleDisabledDays } from '@/utils/helpers/handleDisabledDays';

import { Icon, IconWrapper, WeekSwitcher } from '../Calendar/styles';
import { SevenColGrid } from '../CalendarGrid/styles';
import { CalendarGridProps } from '../CalendarGrid/types';
import Day from '../Day';

const daysInWeek = 7;

const CalendarGridByWeek: FC<CalendarGridProps> = ({
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
  isDateByInput,
  onHandlerSelectDate,
}) => {
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [days, setDays] = useState<number[]>([]);

  const totalDays = useMemo(
    () => getRange(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1),
    [currentYear, currentMonth]
  );

  const currentMonthWeeks = useMemo(
    () => Math.ceil(totalDays.length / daysInWeek),
    [totalDays]
  );

  useEffect(() => {
    const weekDays = totalDays.slice(
      currentWeek * daysInWeek,
      currentWeek * daysInWeek + daysInWeek
    ) as number[];

    setDays(weekDays);
  }, [currentWeek]);

  const onHandlerNextWeek = () => {
    if (days[days.length - 1] !== totalDays[totalDays.length - 1]) {
      setCurrentWeek((prev) => prev + 1);
    }
  };

  const onHandlerPrevWeek = () => {
    if (days[0] !== totalDays[0]) {
      setCurrentWeek((prev) => prev - 1);
    }
  };

  return (
    <>
      <SevenColGrid>
        {days.length > 0 &&
          days.map((day) => (
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
          ))}
      </SevenColGrid>
      <WeekSwitcher>
        <IconWrapper onClick={onHandlerPrevWeek}>
          <Icon src={MyPrevSvg} alt="prev" />
        </IconWrapper>
        {`${currentWeek + 1} / ${currentMonthWeeks}`}
        <IconWrapper onClick={onHandlerNextWeek}>
          <Icon src={MyNextSvg} alt="next" />
        </IconWrapper>
      </WeekSwitcher>
    </>
  );
};

export default CalendarByWeekDecorator(CalendarGridByWeek);
