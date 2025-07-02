import { Template } from "@4i4/theme-registry";
import { darken } from "@lib://utils";
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
    padding: 0;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  align-items: center;
  gap: 5px;
  text-transform: capitalize;
  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palettes.success.main};
  }
  &.processing {
    &:before {
      background-color: ${({ theme }) => theme.palettes.primary.main};
    }
  }
  &.closed {
    &:before {
      background-color: ${({ theme }) =>
        darken(theme.palettes.canvas.main, 20)};
    }
  }
`;

export const Time = styled.div`
  font-size: 0.8rem;
  white-space: nowrap;
`;
export const TimeValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
