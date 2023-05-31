import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.DARK_GRAY};
`;
export const ErrorMessage = styled.p`
  margin: ${({ theme }) => theme.margins.s}% auto;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: transparent;
`;
