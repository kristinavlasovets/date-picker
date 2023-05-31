import styled from 'styled-components';

export const ClearButton = styled.button`
  width: ${({ theme }) => theme.width.xxxl}px;
  height: ${({ theme }) => theme.height.l}px;
  background: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px
    ${({ theme }) => theme.borderRadiuses.s}px
    ${({ theme }) => theme.borderRadiuses.m}px
    ${({ theme }) => theme.borderRadiuses.m}px;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  cursor: pointer;
`;
