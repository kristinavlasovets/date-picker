import React, { FC, useEffect, useState } from 'react';

import MyNextSvg from '@/assets/icons/next.svg';
import MyPrevSvg from '@/assets/icons/prev.svg';
import {
  getDayVariant,
  getNumberOfDaysinMonth,
  getRange,
  getTimeFromState,
} from '@/utils/helpers/CalendarHelpers';

import { CalendarByWeekDecorator } from '../../utils/decorators/CalendarByWeekDecorator';
import { Icon, IconWrapper, WeekSwitcher } from '../Calendar/styles';
import { SevenColGrid } from '../CalendarGrid/styles';
import { CalendarGridProps } from '../CalendarGrid/types';
import Day from '../Day/Day';

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

  onHandlerSelectDate,
}) => {
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [days, setDays] = useState<number[]>([]);

  const totalDays = getRange(
    1,
    getNumberOfDaysinMonth(currentYear, currentMonth) + 1
  );

  useEffect(() => {
    const weekDays = totalDays.slice(
      currentWeek * 7,
      currentWeek * 7 + 7
    ) as number[];

    setDays(weekDays);
  }, [currentWeek]);

  const onHandlerNextWeek = () => {
    if (days[days.length - 1] === totalDays[totalDays.length - 1]) {
      return;
    } else {
      setCurrentWeek((prev) => prev + 1);
    }
  };

  const onHandlerPrevWeek = () => {
    if (days[0] === totalDays[0]) {
      return;
    } else {
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
          ))}
      </SevenColGrid>
      <WeekSwitcher>
        <IconWrapper onClick={onHandlerPrevWeek}>
          <Icon src={MyPrevSvg} alt="prev" />
        </IconWrapper>
        {`${currentWeek + 1} / ${Math.ceil(totalDays.length / 7)}`}
        <IconWrapper onClick={onHandlerNextWeek}>
          <Icon src={MyNextSvg} alt="next" />
        </IconWrapper>
      </WeekSwitcher>
    </>
  );
};

export default CalendarByWeekDecorator(CalendarGridByWeek);
