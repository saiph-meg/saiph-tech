import { Template } from "@4i4/theme-registry";
import { darken } from "@lib://utils";
import styled from "styled-components";

export const Wrap = styled(Template).attrs(() => ({
  template: "col",
  context: "grid",
  className: "xs-12 md-4"
}))`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.spacing}px;
`;

export const Card = styled(Template).attrs(() => ({
  template: "card",
  context: "component"
}))`
  .card-body {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.grid.spacing}px;
  }
`;

export const Headline = styled.h4`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: ${({ theme }) => theme.grid.spacing}px;
  color: rgba(31, 41, 55, 0.65);
  &:after,
  &:before {
    content: "";
    height: 1px;
    flex: 1;
    background-color: rgba(31, 41, 55, 0.35);
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.grid.spacing}px;
  width: 100%;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
    svg {
      max-width: 20px;
      max-height: 20px;
      path,
      polygon {
        transform: scale(1.6);
        transform-origin: center;
        fill: ${({ theme }) => theme.palettes.success.main};
      }
    }
    &.warning {
      svg {
        path,
        polygon {
          fill: ${({ theme }) => theme.palettes.warning.main};
        }
      }
    }
    &.danger {
      svg {
        path,
        polygon {
          fill: ${({ theme }) => darken(theme.palettes.error.main, 20)};
        }
      }
    }
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
  &.warning {
    &:before {
      background-color: ${({ theme }) => theme.palettes.warning.main};
    }
  }
  &.danger {
    &:before {
      background-color: ${({ theme }) => darken(theme.palettes.error.main, 20)};
    }
  }
`;

export const Time = styled.div`
  font-size: 0.8rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const TimeValue = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  a {
    font-weight: 600;
  }
`;
