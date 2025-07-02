import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Wrap = styled(Template).attrs(() => ({
  template: "col",
  context: "grid",
  className: "xs-12 md-3 lg-2"
}))`
  background-color: ${({ theme }) => theme.palettes.secondary.main};
  border-top: 1px solid rgba(255, 255, 255, 0.125);
  color: white;
  a {
    color: white;
  }
`;
