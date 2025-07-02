import styled from "styled-components";

export const Wrap = styled.div`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.palettes.secondary.main} 20%,
    ${({ theme }) => theme.palettes.primary.main} 80%
  );
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

export const Account = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-weight: 600;
  gap: ${({ theme }) => theme.grid.spacing}px;
  a {
    line-height: 1;
    background-color: ${({ theme }) => theme.palettes.canvas.main};
    padding: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  img {
    border-radius: 50%;
  }
  svg {
    max-width: 20px;
    max-height: 20px;
    path {
      transform: scale(1.6);
      transform-origin: center;
      fill: #363636;
    }
  }
`;
