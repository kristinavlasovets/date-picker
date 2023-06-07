import React, { FC } from 'react';

import { DayText } from '@/constants';

import { DayItem } from './styles';
import { DayProps } from './types';

const { dayLabel } = DayText;

const Day: FC<DayProps> = ({
  variant = 'default',
  holidaycolor,
  onClick,
  currentday,
  day = 0,
  $showWeekend,
}) => (
  <DayItem
    variant={variant}
    holidaycolor={holidaycolor}
    onClick={onClick}
    currentday={currentday}
    $showWeekend={$showWeekend}
    aria-label={dayLabel}
  >
    {day}
  </DayItem>
);

export default Day;
