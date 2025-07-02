import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
`;

export const Error = styled.div`
  background-color: ${({ theme }) => theme.palettes.error.main};
  color: ${({ theme }) => theme.palettes.error.text};
  padding: ${({ theme }) => theme.spacing(4)}px
    ${({ theme }) => theme.spacing(8)}px;
  border-radius: 30px;
  margin-bottom: ${({ theme }) => theme.spacing(8)}px;
`;
