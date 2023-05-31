import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import MyNextSvg from '@/assets/icons/next.svg';
import MyPrevSvg from '@/assets/icons/prev.svg';
import { calendarText } from '@/constants/config/components/calendar';
import { monthNames } from '@/constants/config/monthNames';
import { years } from '@/constants/config/years';
import { GlobalStyles } from '@/styles/globalStyles';
import { commonTheme } from '@/styles/theme';
import {
  getNumberOfDaysinMonth,
  getSortedDays,
  getTimeFromState,
} from '@/utils/helpers/CalendarHelpers';
import { getDateInRange } from '@/utils/helpers/DateSelectorHelpers';

import Button from '../Button/Button';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import CalendarGridByMonth from '../CalendarGridByMonth/CalendarGridByMonth';
import CalendarGridByWeek from '../CalendarGridByWeek/CalendarGridByWeek';
import ErrorBoundary from '../ErrorBoundary';
import TodoList from '../TodoList/TodoList';

import {
  Header,
  Icon,
  IconWrapper,
  Main,
  Month,
  SevenColGrid,
  Title,
  Toggle,
  TwoColGrid,
  Weekday,
  Wrapper,
  Year,
} from './styles';
import { CalendarProps } from './types';

const Calendar: FC<CalendarProps> = ({
  minDate,
  maxDate,
  startDate,
  endDate,
  defaultValue,
  value,
  variant,
  holidays,
  $holidayColor,
  $textColor,
  isClearButton,
  isTodoList,
  withoutTodo,
  withRange,
  onHandlerShowButton,
  onHandlerShowTodoList,
  onHandlerRangeDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedDate, setSelectedDate] = useState<Date>(defaultValue);
  const [isMonthPopup, setIsMonthPopup] = useState<boolean>(false);
  const [isYearPopup, setIsYearPopup] = useState<boolean>(false);
  const [showWeekend, setShowWeekend] = useState<boolean>(true);

  useEffect(() => {
    defaultValue && setCurrentMonth(defaultValue.getMonth());
    defaultValue && setCurrentYear(defaultValue.getFullYear());
    setSelectedDate(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    value && setCurrentMonth(value.getMonth());
    value && setCurrentYear(value.getFullYear());
    setSelectedDate(value);
  }, [value]);

  const onHandlerPrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const onHandlerNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const onHandlerSelectDate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedDate(
      new Date(
        currentYear,
        currentMonth,
        Number(e.currentTarget.getAttribute('currentday'))
      )
    );
    onHandlerRangeDate(
      new Date(
        currentYear,
        currentMonth,
        Number(e.currentTarget.getAttribute('currentday'))
      )
    );
  };

  useEffect(() => {
    if (
      !getDateInRange(selectedDate, minDate, maxDate) ||
      currentMonth !== selectedDate.getMonth() ||
      currentYear !== selectedDate.getFullYear()
    ) {
      onHandlerShowButton(false);
      onHandlerShowTodoList(false);
    } else {
      onHandlerShowButton(true);
      onHandlerShowTodoList(true);
    }
  }, [selectedDate, currentMonth, currentYear]);

  const onHandlerClearDate = () => {
    setCurrentMonth(defaultValue.getMonth());
    setCurrentYear(defaultValue.getFullYear());
    setSelectedDate(defaultValue);

    onHandlerShowButton(false);
  };

  const onHandlerShowMonthPopup = () => {
    setIsMonthPopup(!isMonthPopup);
  };

  const onHandlerShowYearPopup = () => {
    setIsYearPopup(!isYearPopup);
  };

  const onHadlerChosenMonth = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentMonth(Number(e.currentTarget.getAttribute('currentmonth')));
    setIsMonthPopup(!isMonthPopup);
  };

  const onHadlerChosenYear = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentYear(Number(e.currentTarget.getAttribute('currentyear')));
    setIsYearPopup(!isYearPopup);
  };

  const onHandlerToggleWeekends = () => {
    setShowWeekend(!showWeekend);
  };
  const { prevAlt, nextAlt, hideText, showText } = calendarText;

  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles theme={commonTheme} />
      <ErrorBoundary>
        <Wrapper>
          <Header>
            <IconWrapper
              onClick={onHandlerPrevMonth}
              disabled={
                minDate &&
                minDate?.getTime() >
                  getTimeFromState(1, currentYear, currentMonth)
              }
            >
              <Icon src={MyPrevSvg} alt={prevAlt} />
            </IconWrapper>
            <Title>
              {!isMonthPopup && (
                <Month
                  $textColor={$textColor}
                  onClick={onHandlerShowMonthPopup}
                >
                  {monthNames[currentMonth]}
                </Month>
              )}
              {isMonthPopup && (
                <TwoColGrid>
                  {monthNames.map((month, index) => (
                    <Month
                      $textColor={$textColor}
                      currentmonth={index}
                      key={month}
                      onClick={onHadlerChosenMonth}
                    >
                      {month}
                    </Month>
                  ))}
                </TwoColGrid>
              )}
              {isYearPopup && (
                <TwoColGrid>
                  {years.map((year) => (
                    <Month
                      $textColor={$textColor}
                      currentyear={year}
                      key={year}
                      onClick={onHadlerChosenYear}
                    >
                      {year}
                    </Month>
                  ))}
                </TwoColGrid>
              )}
              {!isYearPopup && (
                <Year $textColor={$textColor} onClick={onHandlerShowYearPopup}>
                  {currentYear}
                </Year>
              )}
            </Title>
            <IconWrapper
              onClick={onHandlerNextMonth}
              disabled={
                maxDate &&
                maxDate?.getTime() <
                  getTimeFromState(
                    getNumberOfDaysinMonth(currentYear, currentMonth),
                    currentYear,
                    currentMonth
                  )
              }
            >
              <Icon src={MyNextSvg} alt={nextAlt} />
            </IconWrapper>
          </Header>
          <Main>
            {variant !== 'month' && (
              <SevenColGrid>
                {getSortedDays(currentYear, currentMonth).map((weekday) => (
                  <Weekday $textColor={$textColor} key={weekday}>
                    {weekday}
                  </Weekday>
                ))}
              </SevenColGrid>
            )}
            {variant === 'day' && (
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
              />
            )}
            {variant === 'week' && (
              <CalendarGridByWeek
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
                isByWeek={true}
              />
            )}
            {variant === 'month' && (
              <CalendarGridByMonth
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
                isByMonth={true}
              />
            )}
          </Main>
          {variant !== 'month' && isTodoList && !withoutTodo && (
            <TodoList
              selectedDate={selectedDate}
              onHandlerShowTodoList={onHandlerShowTodoList}
            />
          )}
          {variant !== 'month' && (
            <Toggle onClick={onHandlerToggleWeekends}>
              {showWeekend ? hideText : showText}
            </Toggle>
          )}
          {variant !== 'month' && isClearButton && (
            <Button onHandlerClearDate={onHandlerClearDate} />
          )}
        </Wrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Calendar;
