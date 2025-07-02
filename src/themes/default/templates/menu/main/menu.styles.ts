import styled from "styled-components";

export const List = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  position: sticky;
  top: 0;
  ul {
    position: static;
  }
`;

export const Item = styled.li`
  padding: 0;
`;

export const Label = styled.span`
  opacity: 0.5;
  text-transform: uppercase;
  padding: 12px 1.25rem;
  margin: 12px 0;
  font-size: 0.8rem;
  display: block;
`;

export const MenuItem = styled.a`
  padding: 12px 1.25rem;
  display: flex;
  cursor: pointer;
  svg {
    max-width: 25px;
    max-height: 25px;
    path,
    polygon {
      fill: white;
      transform: scale(1.6);
      transform-origin: center;
    }
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.15);
    color: #c0317f;
    svg {
      path,
      polygon {
        fill: #c0317f;
      }
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const Icon = styled.div`
  margin-right: 1.125rem;
`;
export const Content = styled.div``;
export const Action = styled.div`
  margin-left: auto;
`;

export const Title = styled.div``;
export const Description = styled.div`
  opacity: 0.5;
  color: white !important;
  font-size: 0.8rem;
`;
