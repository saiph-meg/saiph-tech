import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Wrap = styled(Template).attrs(() => ({
  template: "row",
  context: "grid"
}))`
  padding: ${({ theme }) => theme.grid.spacing}px 0;
`;
