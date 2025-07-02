import { Template } from "@4i4/theme-registry";
import styled from "styled-components";

export const Wrap = styled(Template).attrs(() => ({
  template: "col",
  context: "grid",
  className: "xs-12 md-6"
}))``;

export const Card = styled(Template).attrs(() => ({
  template: "card",
  context: "component"
}))`
  min-height: 100%;
`;

export const Rule = styled.div``;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  a {
    font-weight: 600;
  }
`;

export const Description = styled.div``;
