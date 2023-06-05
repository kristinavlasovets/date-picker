import { styled } from 'styled-components';

import { CalendarStylesProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.xxs}px;
  width: ${({ theme }) => theme.width.xxxl}px;
  height: 'fit-content';
  background: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.s}px;
  padding: ${({ theme }) => theme.paddings.xs}px
    ${({ theme }) => theme.paddings.xxs}px;
  width: ${({ theme }) => theme.width.xxl}px;
  height: ${({ theme }) => theme.height.s}px;
`;

export const Title = styled.div`
  width: ${({ theme }) => theme.width.xxl}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WeekSwitcher = styled.div`
  margin-top: ${({ theme }) => theme.margins.s}px;
  width: ${({ theme }) => theme.width.xxl}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;

export const Month = styled.button<CalendarStylesProps>`
  width: fit-content;
  padding: ${({ theme }) => theme.paddings.xs}px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme, $textColor }) =>
    $textColor ? $textColor : theme.colors.DARK_GRAY};
  padding-right: ${({ theme }) => theme.paddings.s}px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Year = styled.button<CalendarStylesProps>`
  width: fit-content;
  padding: ${({ theme }) => theme.paddings.xs}px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme, $textColor }) =>
    $textColor ? $textColor : theme.colors.DARK_GRAY};

  &:hover {
    transform: scale(1.2);
  }
`;

export const IconWrapper = styled.button`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.width.s}px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Main = styled.div`
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
`;

export const SevenColGrid = styled.div`
  width: ${({ theme }) => theme.width.xxl}px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const TwoColGrid = styled.div`
  width: ${({ theme }) => theme.width.xxl}px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.WHITE};
  padding: ${({ theme }) => theme.paddings.xs}px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
  z-index: ${({ theme }) => theme.zIndexes.m};
`;

export const Weekday = styled.p<CalendarStylesProps>`
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme, $textColor }) =>
    $textColor ? $textColor : theme.colors.DARK_GRAY};
  padding-left: ${({ theme }) => theme.paddings.s}px;
`;

export const Toggle = styled.button`
  width: ${({ theme }) => theme.width.xxl}px;
  height: ${({ theme }) => theme.height.l}px;
  background: ${({ theme }) => theme.colors.WHITE};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.DARK_BLUE};
  cursor: pointer;
`;
