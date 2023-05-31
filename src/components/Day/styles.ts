import styled from 'styled-components';

import { Colors } from '../../constants/styles/colors';

import { DayProps } from './types';

const DayItemVariants = {
  default: {
    background: 'transparent',
    borderRadius: 0,
    color: Colors.DARK_GRAY,
  },
  hover: {
    background: Colors.LIGHT_GRAY,
    borderRadius: '8px',
    color: Colors.DARK_GRAY,
  },
  disabled: {
    background: 'transparent',
    borderRadius: 0,
    color: Colors.GRAY,
  },
  selected: {
    background: Colors.DARK_BLUE,
    borderRadius: '8px',
    color: Colors.WHITE,
  },
  ['range-start']: {
    background: Colors.BLUE,
    borderRadius: '8px 0px 0px 8px',
    color: Colors.WHITE,
  },
  ['range-in-between']: {
    background: Colors.LIGHT_BLUE,
    borderRadius: 0,
    color: Colors.DARK_BLUE,
  },
  ['range-end']: {
    background: Colors.DARK_BLUE,
    borderRadius: '0px 8px 8px 0px',
    color: Colors.WHITE,
  },
  holiday: {
    background: Colors.PINK,
    borderRadius: '8px',
    color: Colors.WHITE,
  },
  weekend: {
    background: 'transparent',
    borderRadius: '8px',
    color: Colors.DARK_BLUE,
  },
};

export const DayItem = styled.button<DayProps>`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.m}px;
  height: ${({ theme }) => theme.height.l}px;
  padding: ${({ theme }) => theme.paddings.s}px;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  line-height: 100%;
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
