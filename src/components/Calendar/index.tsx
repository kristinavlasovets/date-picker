import React, { FC, useCallback, useEffect, useState } from 'react';

import MyNextSvg from '@/assets/icons/next.svg';
import MyPrevSvg from '@/assets/icons/prev.svg';
import { CalendarText, monthNames, years } from '@/constants';
import {
  getNumberOfDaysInMonth,
  getSortedDays,
  getTimeFromState,
} from '@/utils/helpers/CalendarHelpers';
import { getDateInRange } from '@/utils/helpers/DateSelectorHelpers';

import Button from '../Button';
import CalendarGrid from '../CalendarGrid';
import CalendarGridByMonth from '../CalendarGridByMonth';
import CalendarGridByWeek from '../CalendarGridByWeek';
import ErrorBoundary from '../ErrorBoundary';
import TodoList from '../TodoList';

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
import { CalendarProps, IsPopUpOpenStateProps } from './types';

const { prevAlt, nextAlt, hideText, showText } = CalendarText;

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
  isDateByInput,
  onHandlerShowButton,
  onHandlerShowTodoList,
  onHandlerRangeDate,
  onHandlerShowCalendar,
  onHandlerSetDayByInput,
}) => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedDate, setSelectedDate] = useState<Date>(defaultValue);
  const [isPopUpOpen, setIsPopUpOpen] = useState<IsPopUpOpenStateProps>({
    isYearOpen: false,
    isMonthOpen: false,
  });
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

  const onHandlerSelectDate = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      onHandlerSetDayByInput(false);
      onHandlerShowCalendar();
    },
    [currentYear, currentMonth, onHandlerSetDayByInput, onHandlerShowCalendar]
  );

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

  const onHandlerCalendarPopup = (type: keyof IsPopUpOpenStateProps) => () => {
    setIsPopUpOpen((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const onHandlerChosenPopUpType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: keyof IsPopUpOpenStateProps
  ) => {
    const target = e.currentTarget;
    if (type === 'isMonthOpen') {
      setCurrentMonth(Number(target.getAttribute('currentmonth')));
      setIsPopUpOpen((prev) => ({ ...prev, isMonthOpen: false }));
    }
    if (type === 'isYearOpen') {
      setCurrentYear(Number(target.getAttribute('currentyear')));
      setIsPopUpOpen((prev) => ({ ...prev, isYearOpen: false }));
    }
  };

  const onHandlerClearDate = useCallback(() => {
    setCurrentMonth(value.getMonth());
    setCurrentYear(value.getFullYear());
    setSelectedDate(value);

    onHandlerShowButton(false);
  }, [value, onHandlerShowButton]);

  const onHandlerToggleWeekends = (): void => {
    setShowWeekend((prev) => !prev);
  };

  return (
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
            {!isPopUpOpen.isMonthOpen && (
              <Month
                $textColor={$textColor}
                onClick={onHandlerCalendarPopup('isMonthOpen')}
              >
                {monthNames[currentMonth]}
              </Month>
            )}
            {isPopUpOpen.isMonthOpen && (
              <TwoColGrid>
                {monthNames.map((month, index) => (
                  <Month
                    $textColor={$textColor}
                    currentmonth={index}
                    key={month}
                    onClick={(e) => onHandlerChosenPopUpType(e, 'isMonthOpen')}
                  >
                    {month}
                  </Month>
                ))}
              </TwoColGrid>
            )}
            {isPopUpOpen.isYearOpen && (
              <TwoColGrid>
                {years.map((year) => (
                  <Month
                    $textColor={$textColor}
                    currentyear={year}
                    key={year}
                    onClick={(e) => onHandlerChosenPopUpType(e, 'isYearOpen')}
                  >
                    {year}
                  </Month>
                ))}
              </TwoColGrid>
            )}
            {!isPopUpOpen.isYearOpen && (
              <Year
                $textColor={$textColor}
                onClick={onHandlerCalendarPopup('isYearOpen')}
              >
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
                  getNumberOfDaysInMonth(currentYear, currentMonth),
                  currentYear,
                  currentMonth
                )
            }
          >
            <Icon src={MyNextSvg} alt={nextAlt} />
          </IconWrapper>
        </Header>
        <Main>
          {variant !== 'year' && (
            <SevenColGrid>
              {getSortedDays(currentYear, currentMonth).map((weekday) => (
                <Weekday $textColor={$textColor} key={weekday}>
                  {weekday}
                </Weekday>
              ))}
            </SevenColGrid>
          )}
          {variant === 'month' && (
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
              $holidayColor={$holidayColor}
              showWeekend={showWeekend}
              isDateByInput={isDateByInput}
              onHandlerSelectDate={onHandlerSelectDate}
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
              $holidayColor={$holidayColor}
              showWeekend={showWeekend}
              isByWeek={true}
              isDateByInput={isDateByInput}
              onHandlerSelectDate={onHandlerSelectDate}
            />
          )}
          {variant === 'year' && (
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
              $holidayColor={$holidayColor}
              showWeekend={showWeekend}
              isByMonth={true}
              isDateByInput={isDateByInput}
              onHandlerSelectDate={onHandlerSelectDate}
            />
          )}
        </Main>
        {variant !== 'year' && isTodoList && !withoutTodo && (
          <TodoList
            selectedDate={selectedDate}
            onHandlerShowTodoList={onHandlerShowTodoList}
          />
        )}
        {variant !== 'year' && (
          <Toggle onClick={onHandlerToggleWeekends}>
            {showWeekend ? hideText : showText}
          </Toggle>
        )}
        {variant !== 'year' && isClearButton && (
          <Button onHandlerClearDate={onHandlerClearDate} />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Calendar;
