import { darken } from "@lib://utils";
import styled from "styled-components";

export const Wrap = styled.div`
  background-color: white;
  border-top: 1px solid ${({ theme }) => darken(theme.palettes.canvas.main, 10)};
  min-height: 60px;
  padding: ${({ theme }) => theme.grid.spacing}px;
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    transform: translateY(-5px);
  }
  a {
    font-family: "Audiowide", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;
