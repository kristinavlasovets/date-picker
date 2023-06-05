import React, { FC } from 'react';

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
    <DayItem
      variant={variant}
      $holidayColor={$holidayColor}
      onClick={onClick}
      currentday={currentday}
      $showWeekend={$showWeekend}
    >
      {day}
    </DayItem>
  );
};

export default Day;
