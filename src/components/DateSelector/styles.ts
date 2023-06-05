import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.width.xxxl}px;
  height: fit-content;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  padding: ${({ theme }) => theme.paddings.s}px;
  width: ${({ theme }) => theme.width.xxxl}px;
  height: ${({ theme }) => theme.height.ll}px;
  background: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.paddings.xxs}px;
  width: ${({ theme }) => theme.width.xll}px;
  height: ${({ theme }) => theme.height.ss}px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  border: none;
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
  height: ${({ theme }) => theme.height.s}px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ErrorMessage = styled.p`
  width: ${({ theme }) => theme.width.xxxl}px;
  height: fit-content;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.DARK_BLUE};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
`;
