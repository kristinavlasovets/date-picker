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

const { prevAlt, nextAlt, hideText, showText, weekdayLabel } = CalendarText;

const Calendar: FC<CalendarProps> = ({
  minDate,
  maxDate,
  startDate,
  endDate,
  defaultValue,
  value,
  variant,
  beginningOfTheWeek,
  holidays,
  holidaycolor,
  textcolor,
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

  const oneMonth = 1;
  const firstMonth = 0;
  const lastMonth = 11;
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
    if (currentMonth > firstMonth) {
      setCurrentMonth((prev) => prev - oneMonth);
    } else {
      setCurrentMonth(lastMonth);
      setCurrentYear((prev) => prev - oneMonth);
    }
  };

  const onHandlerNextMonth = () => {
    if (currentMonth < lastMonth) {
      setCurrentMonth((prev) => prev + oneMonth);
    } else {
      setCurrentMonth(firstMonth);
      setCurrentYear((prev) => prev + oneMonth);
    }
  };

  const onHandlerSelectDate = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (e.currentTarget.getAttribute('variant') === 'disabled') {
        return;
      }

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
      onHandlerShowCalendar(true);
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
            <Icon src={MyPrevSvg} alt={prevAlt} aria-label={prevAlt} />
          </IconWrapper>
          <Title>
            {!isPopUpOpen.isMonthOpen && (
              <Month
                textcolor={textcolor}
                onClick={onHandlerCalendarPopup('isMonthOpen')}
                aria-label="monthToggle"
              >
                {monthNames[currentMonth]}
              </Month>
            )}
            {isPopUpOpen.isMonthOpen && (
              <TwoColGrid>
                {monthNames.map((month, index) => (
                  <Month
                    textcolor={textcolor}
                    currentMonth={index}
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
                    textcolor={textcolor}
                    currentYear={year}
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
                textcolor={textcolor}
                onClick={onHandlerCalendarPopup('isYearOpen')}
                aria-label="yearToggle"
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
            <Icon src={MyNextSvg} alt={nextAlt} aria-label={nextAlt} />
          </IconWrapper>
        </Header>
        <Main>
          {variant !== 'year' && (
            <SevenColGrid>
              {getSortedDays(beginningOfTheWeek).map((weekday) => (
                <Weekday
                  textcolor={textcolor}
                  key={weekday}
                  aria-label={weekdayLabel}
                >
                  {weekday}
                </Weekday>
              ))}
            </SevenColGrid>
          )}
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
            holidaycolor={holidaycolor}
            showWeekend={showWeekend}
            isDateByInput={isDateByInput}
            isByWeek={variant === 'week'}
            isByYear={variant === 'year'}
            beginningOfTheWeek={beginningOfTheWeek}
            onHandlerSelectDate={onHandlerSelectDate}
          />
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
