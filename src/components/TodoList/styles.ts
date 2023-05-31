import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.width.xxl}px;
  height: fit-content;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
  z-index: 10;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.s}px;
  align-items: center;
  width: ${({ theme }) => theme.width.xxl}px;
  height: fit-content;
`;

export const Title = styled.p`
  padding: ${({ theme }) => theme.paddings.xs}px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.paddings.xxs}px;
  width: ${({ theme }) => theme.width.xxl}px;
  height: ${({ theme }) => theme.height.ss}px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: 140%;
  border: none;
`;

export const CloseIconWrapper = styled.button`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const IconWrapper = styled.button`
  width: ${({ theme }) => theme.width.m}px;
  height: ${({ theme }) => theme.height.m}px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.xl}%;

  &:hover {
    transform: scale(1.2);
  }
`;
