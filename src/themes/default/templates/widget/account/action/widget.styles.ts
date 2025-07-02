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
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.grid.spacing}px;
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(192, 49, 127, 0.125);
  svg {
    width: 60px;
    height: 60px;
    margin-top: -5px;
    polygon,
    path {
      fill: rgba(192, 49, 127, 1);
    }
  }
`;

export const Button = styled.button`
  border: none;
`;
