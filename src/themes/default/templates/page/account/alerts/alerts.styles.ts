import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Wrap = styled.div`
  padding: ${({ theme }) => theme.grid.spacing}px 0;
  padding-right: ${({ theme }) => theme.grid.spacing}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.spacing}px;
`;

export const Filters = styled(Template).attrs(() => ({
  template: "card",
  context: "component"
}))`
  form {
    display: flex;
    gap: ${({ theme }) => theme.grid.spacing}px;
  }
`;
