import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dayPickerText } from '@/constants/config/components/dayPicker';
import { GlobalStyles } from '@/styles/globalStyles';
import { commonTheme } from '@/styles/theme';

import Calendar from '../Calendar/Calendar';
import DateSelector from '../DateSelector/DateSelector';
import ErrorBoundary from '../ErrorBoundary';

import { Title, Wrapper } from './styles';
import { DayPickerProps } from './types';

const DayPicker: FC<DayPickerProps> = ({
  defaultValue,
  minDate,
  maxDate,
  variant,
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

  const onHandlerSelectDate = (date: Date) => {
    setValue(date);
    setIsPopup(true);
  };

  const onHandlerShowPopUp = () => {
    setIsPopup(!isPopup);
  };

  const onHandlerShowTodoList = (action: boolean) => {
    setIsTodoList(action);
  };
  const { titleDefault } = dayPickerText;

  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles theme={commonTheme} />
      <ErrorBoundary>
        <Wrapper>
          <Title>{title ? title : titleDefault}</Title>
          <DateSelector
            minDate={minDate}
            maxDate={maxDate}
            onHandlerSelectDate={onHandlerSelectDate}
            onHandlerShowPopUp={onHandlerShowPopUp}
          />
          {isPopup && (
            <Calendar
              value={value}
              variant={variant}
              minDate={minDate}
              maxDate={maxDate}
              startDate={startDate}
              endDate={endDate}
              defaultValue={defaultValue}
              holidays={holidays}
              $textColor={$textColor}
              $holidayColor={$holidayColor}
              onHandlerShowButton={onHandlerShowButton}
              isClearButton={isClearButton}
              isTodoList={isTodoList}
              onHandlerShowTodoList={onHandlerShowTodoList}
              withoutTodo={withoutTodo}
              withRange={withRange}
              onHandlerRangeDate={onHandlerRangeDate}
            />
          )}
        </Wrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default DayPicker;
