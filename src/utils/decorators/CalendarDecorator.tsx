import React, { useEffect, useMemo, useState } from 'react';

import MyNextSvg from '@/assets/icons/next.svg';
import MyPrevSvg from '@/assets/icons/prev.svg';
import { Icon, IconWrapper, WeekSwitcher } from '@/components/Calendar/styles';
import { SevenColGrid } from '@/components/CalendarGrid/styles';
import { CalendarGridProps } from '@/components/CalendarGrid/types';
import Day from '@/components/Day';

import {
  getDayVariant,
  getNumberOfDaysInMonth,
  getRange,
} from '../helpers/CalendarHelpers';
import { handleDisabledDays } from '../helpers/handleDisabledDays';

const daysInWeek = 7;

export const CalendarDecorator = (WrappedComponent: React.ElementType) =>
  function (props: CalendarGridProps) {
    const {
      currentMonth,
      currentYear,
      defaultValue,
      $holidayColor,
      holidays,
      isDateByInput,
      maxDate,
      minDate,
      selectedDate,
      startDate,
      endDate,
      showWeekend,
      withRange,
      isByYear,
      isByWeek,
      onHandlerSelectDate,
    } = props;
    if (isByWeek) {
      const [currentWeek, setCurrentWeek] = useState<number>(0);
      const [days, setDays] = useState<number[]>([]);

      const totalDays = useMemo(
        () =>
          getRange(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1),
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
    }

    if (isByYear) {
      return <WrappedComponent isByYear={true} {...props} />;
    }

    return <WrappedComponent {...props} />;
  };
