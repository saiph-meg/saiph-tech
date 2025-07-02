import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled(Template).attrs(() => ({
  template: "row",
  context: "grid"
}))`
  flex-grow: 1;
`;

export const Main = styled(Template).attrs(() => ({
  template: "col",
  context: "grid",
  className: "xs-12 md-9 lg-10"
}))``;
