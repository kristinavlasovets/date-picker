import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/globalStyles';
import { commonTheme } from '@/styles/theme';

import { DayItem } from './styles';
import { DayProps } from './types';

const Day: FC<DayProps> = ({
  variant = 'default',
  $holidayColor,
  onClick,
  currentday,
  day = 0,
  $showWeekend,
}) => {
  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles theme={commonTheme} />
      <DayItem
        variant={variant}
        $holidayColor={$holidayColor}
        onClick={onClick}
        currentday={currentday}
        $showWeekend={$showWeekend}
      >
        {day}
      </DayItem>
    </ThemeProvider>
  );
};

export default Day;
