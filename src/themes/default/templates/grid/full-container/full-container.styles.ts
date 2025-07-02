import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.grid.spacing}px;
`;
