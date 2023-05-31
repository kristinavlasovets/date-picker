import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dayPickerText } from '@/constants/config/components/dayPicker';
import { GlobalStyles } from '@/styles/globalStyles';
import { commonTheme } from '@/styles/theme';

import DayPicker from '../DayPicker/DayPicker';
import ErrorBoundary from '../ErrorBoundary';

import { Wrapper } from './styles';
import { RangePickerProps } from './types';

const RangePicker: FC<RangePickerProps> = ({
  defaultStartDate,
  defaultEndDate,
  minDate,
  maxDate,
  variant,
  $holidayColor,
  $textColor,
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

  const { titleFrom, titleTo } = dayPickerText;
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
            onHandlerRangeDate={onHandlerStartDate}
            holidays={holidays}
            $holidayColor={$holidayColor}
            $textColor={$textColor}
            isClearButton={isClearButton}
            onHandlerShowButton={onHandlerShowButton}
            withoutTodo={withoutTodo}
            withRange={withRange}
          />
          <DayPicker
            title={titleTo}
            defaultValue={endDate}
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            variant={variant}
            onHandlerRangeDate={onHandlerEndDate}
            holidays={holidays}
            $holidayColor={$holidayColor}
            $textColor={$textColor}
            isClearButton={isClearButton}
            onHandlerShowButton={onHandlerShowButton}
            withoutTodo={withoutTodo}
            withRange={withRange}
          />
        </Wrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default RangePicker;
