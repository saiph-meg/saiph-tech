import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.grid.spacing}px;
  &.content-left {
    margin-left: 0;
    padding-left: 0;
  }
  &.content-right {
    margin-right: 0;
    padding-right: 0;
  }
  &.text-left {
    text-align: left;
  }
  &.text-right {
    text-align: right;
  }
  &.text-center {
    text-align: center;
  }
`;
