import styled from 'styled-components';

import { DayItemVariants } from '@/constants';

import { DayProps } from './types';

export const DayItem = styled.button<DayProps>`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.m}px;
  height: ${({ theme }) => theme.height.l}px;
  padding: ${({ theme }) => theme.paddings.s}px;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  cursor: pointer;

  background-color: ${({ variant, $holidayColor }) =>
    variant === 'holiday' && $holidayColor
      ? $holidayColor
      : DayItemVariants[variant].background};
  border-radius: ${({ variant }) => DayItemVariants[variant].borderRadius};
  color: ${({ variant, $showWeekend }) =>
    variant === 'weekend' && !$showWeekend
      ? DayItemVariants.default.color
      : DayItemVariants[variant].color};
`;
