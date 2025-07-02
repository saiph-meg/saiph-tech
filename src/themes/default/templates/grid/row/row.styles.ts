import styled from "styled-components";

export const Wrap = styled.div.attrs(() => ({
  className: "row"
}))<any>`
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(${({ theme }) => theme.grid.size}, 1fr);
  grid-gap: ${({ theme }) => theme.grid.spacing}px;
`;
