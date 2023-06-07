import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { DayPickerText } from '@/constants';
import { GlobalStyles } from '@/styles/globalStyles';
import { commonTheme } from '@/styles/theme';

import DayPicker from '../DayPicker';
import ErrorBoundary from '../ErrorBoundary';

import { Wrapper } from './styles';
import { RangePickerProps } from './types';

const { titleFrom, titleTo } = DayPickerText;

const RangePicker: FC<RangePickerProps> = ({
  defaultStartDate,
  defaultEndDate,
  minDate,
  maxDate,
  variant,
  beginningOfTheWeek,
  holidaycolor,
  textcolor,
  holidays,
}) => {
  const [startDate, setStartDate] = useState<Date>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date>(defaultEndDate);
  const [isClearButton, setIsClearButton] = useState<boolean>(false);

  const withoutTodo = true;
  const withRange = true;

  const onHandlerStartDate = (newStartDate: Date) => {
    setStartDate(newStartDate);
  };

  const onHandlerEndDate = (newEndDate: Date) => {
    setEndDate(newEndDate);
  };

  const onHandlerShowButton = (action: boolean) => {
    setIsClearButton(action);
  };

  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles theme={commonTheme} />
      <ErrorBoundary>
        <Wrapper>
          <DayPicker
            title={titleFrom}
            defaultValue={startDate}
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            variant={variant}
            holidays={holidays}
            holidaycolor={holidaycolor}
            textcolor={textcolor}
            isClearButton={isClearButton}
            withoutTodo={withoutTodo}
            withRange={withRange}
            beginningOfTheWeek={beginningOfTheWeek}
            onHandlerRangeDate={onHandlerStartDate}
            onHandlerShowButton={onHandlerShowButton}
          />
          <DayPicker
            title={titleTo}
            defaultValue={endDate}
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            variant={variant}
            holidays={holidays}
            holidaycolor={holidaycolor}
            textcolor={textcolor}
            isClearButton={isClearButton}
            withoutTodo={withoutTodo}
            withRange={withRange}
            beginningOfTheWeek={beginningOfTheWeek}
            onHandlerRangeDate={onHandlerEndDate}
            onHandlerShowButton={onHandlerShowButton}
          />
        </Wrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default RangePicker;
