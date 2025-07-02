import styled from "styled-components";

export const Wrap = styled.div`
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.125);
  margin-left: -${({ theme }) => theme.grid.spacing}px;
`;

export const Top = styled.div`
  padding: 0 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .content {
    display: flex;
    align-items: center;
  }
`;
export const Bottom = styled.div`
  padding: 0 1.25rem;
  display: flex;
`;
export const Title = styled.h1`
  margin: 0;
  padding: 1.25rem 0;
`;

export const Breadcrumbs = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0.625rem 0;
  margin: 0;
  > li {
    display: flex;
    align-items: center;
    margin-right: 0.625rem;
    &:not(:last-child) {
      &:after {
        content: "/";
        margin-left: 0.625rem;
        display: inline-block;
      }
    }
  }
  svg {
    max-width: 25px;
    max-height: 25px;
    polygon {
      fill: #c0317f;
    }
  }
`;
