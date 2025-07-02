import styled from "styled-components";
import { Template } from "@4i4/theme-registry";
import { darken } from "@lib://utils";

export const Wrap = styled(Template).attrs(() => ({
  template: "col",
  context: "grid",
  className: "xs-12 md-6"
}))`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.grid.spacing}px;
`;

export const Card = styled(Template).attrs(() => ({
  template: "card",
  context: "component"
}))`
  .card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => darken(theme.palettes.canvas.main, 10)};
`;
export const Title = styled.h2`
  flex: 1;
  small {
    display: block;
    opacity: 0.5;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin-top: 5px;
    font-size: 14px;
    text-transform: none;
    font-weight: 400;
  }
`;
export const Icon = styled.div``;
export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.grid.spacing}px 0;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => darken(theme.palettes.canvas.main, 10)};
  padding-top: ${({ theme }) => theme.grid.spacing}px;
`;
