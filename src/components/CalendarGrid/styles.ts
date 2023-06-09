import { styled } from 'styled-components';

export const SevenColGrid = styled.div`
  width: ${({ theme }) => theme.width.xxl}px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
