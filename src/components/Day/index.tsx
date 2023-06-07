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
  showweekend,
}) => (
  <DayItem
    variant={variant}
    holidaycolor={holidaycolor}
    onClick={onClick}
    currentday={currentday}
    showweekend={showweekend}
    aria-label={dayLabel}
  >
    {day}
  </DayItem>
);

export default Day;
