import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ theme }) => theme.width.xxxxl}px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.WHITE};
`;
