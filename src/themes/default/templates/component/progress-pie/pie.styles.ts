import styled from "styled-components";

export const Wrap = styled.div<{ progress: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(
      ${({ theme }) => theme.palettes.primary.main}
        ${({ progress }) => progress}%,
      pink 0
    );
  // &:before {
  //   content: "${({ progress }) => progress}%";
  // }
`;
