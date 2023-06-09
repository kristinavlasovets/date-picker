import { styled } from 'styled-components';

import { TextProps } from './types';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  padding: ${({ theme }) => theme.paddings.s}px;
  width: ${({ theme }) => theme.width.xxl}px;
  height: ${({ theme }) => theme.height.l}px;
  border-top: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
`;

export const Checkbox = styled.input``;

export const Text = styled.div<TextProps>`
  margin-left: ${({ theme }) => theme.margins.s}px;
  color: ${({ theme }) => theme.colors.DARK_BLUE};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export const IconWrapper = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.paddings.s}px;
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;

  &:hover {
    transform: scale(1.2);
  }
`;
