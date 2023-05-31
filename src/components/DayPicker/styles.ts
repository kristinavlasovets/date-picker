import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.xxs}px;
  width: ${({ theme }) => theme.width.xxxl}px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.WHITE};
`;

export const Title = styled.p`
  width: ${({ theme }) => theme.width.xxxl}px;
  height: ${({ theme }) => theme.height.ss}px;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: 140%;
`;
