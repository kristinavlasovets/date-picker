import React, { FC, useState } from 'react';

import { DayPickerText } from '@/constants';

import Calendar from '../Calendar';
import DateSelector from '../DateSelector';
import ErrorBoundary from '../ErrorBoundary';

import { Title, Wrapper } from './styles';
import { DayPickerProps } from './types';

const { titleDefault } = DayPickerText;

const DayPicker: FC<DayPickerProps> = ({
  defaultValue,
  minDate,
  maxDate,
  variant,
  beginningOfTheWeek,
  holidays,
  $holidayColor,
  $textColor,
  title,
  isClearButton,
  withoutTodo,
  withRange,
  startDate,
  endDate,
  onHandlerShowButton,
  onHandlerRangeDate,
}) => {
  const [value, setValue] = useState<Date>(defaultValue);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isTodoList, setIsTodoList] = useState<boolean>(false);
  const [isDateByInput, setIsDateByInput] = useState<boolean>(false);

  const onHandlerSelectDate = (date: Date) => {
    setValue(date);
    setIsPopup(true);
  };

  const onHandlerShowPopUp = () => {
    setIsPopup((prev) => !prev);
  };

  const onHandlerShowTodoList = (action: boolean) => {
    setIsTodoList(action);
  };

  const onHandlerShowCalendar = () => {
    setIsPopup(true);
  };

  const onHandlerSetDayByInput = (action: boolean) => {
    setIsDateByInput(action);
  };

  return (
    <ErrorBoundary>
      <Wrapper>
        <Title>{title || titleDefault}</Title>
        <DateSelector
          minDate={minDate}
          maxDate={maxDate}
          onHandlerSelectDate={onHandlerSelectDate}
          onHandlerShowPopUp={onHandlerShowPopUp}
          onHandlerSetDayByInput={onHandlerSetDayByInput}
        />
        {isPopup && (
          <Calendar
            value={value}
            variant={variant}
            beginningOfTheWeek={beginningOfTheWeek}
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            defaultValue={defaultValue}
            holidays={holidays}
            $textColor={$textColor}
            $holidayColor={$holidayColor}
            isClearButton={isClearButton}
            isTodoList={isTodoList}
            withoutTodo={withoutTodo}
            withRange={withRange}
            isDateByInput={isDateByInput}
            onHandlerShowButton={onHandlerShowButton}
            onHandlerShowTodoList={onHandlerShowTodoList}
            onHandlerRangeDate={onHandlerRangeDate}
            onHandlerShowCalendar={onHandlerShowCalendar}
            onHandlerSetDayByInput={onHandlerSetDayByInput}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default DayPicker;
