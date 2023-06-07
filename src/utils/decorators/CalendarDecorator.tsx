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
const oneDay = 1;
const oneWeek = 1;
const firstDayIndex = 0;
const zeroDays = 0;

export const CalendarDecorator = (WrappedComponent: React.ElementType) =>
  function (props: CalendarGridProps) {
    const {
      currentMonth,
      currentYear,
      defaultValue,
      holidaycolor,
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
      beginningOfTheWeek,
      onHandlerSelectDate,
    } = props;
    if (isByWeek) {
      const [currentWeek, setCurrentWeek] = useState<number>(0);
      const [days, setDays] = useState<number[]>([]);

      const totalDays = useMemo(
        () =>
          getRange(
            oneDay,
            getNumberOfDaysInMonth(currentYear, currentMonth) + oneDay,
            currentMonth,
            currentYear,
            beginningOfTheWeek
          ),
        [beginningOfTheWeek, currentMonth, currentYear]
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
        if (
          days[days.length - oneDay] !== totalDays[totalDays.length - oneDay]
        ) {
          setCurrentWeek((prev) => prev + oneDay);
        }
      };

      const onHandlerPrevWeek = () => {
        if (days[firstDayIndex] !== totalDays[firstDayIndex]) {
          setCurrentWeek((prev) => prev - oneDay);
        }
      };

      return (
        <>
          <SevenColGrid>
            {days.length > zeroDays &&
              days.map((day) => (
                <Day
                  onClick={onHandlerSelectDate}
                  currentday={day}
                  key={day}
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
          <WeekSwitcher>
            <IconWrapper onClick={onHandlerPrevWeek}>
              <Icon src={MyPrevSvg} alt="prev" aria-label="prevWeek" />
            </IconWrapper>
            {`${currentWeek + oneWeek} / ${currentMonthWeeks}`}
            <IconWrapper onClick={onHandlerNextWeek}>
              <Icon src={MyNextSvg} alt="next" aria-label="nextWeek" />
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
