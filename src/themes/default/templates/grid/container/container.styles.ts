import styled from "styled-components";

import { MEDIA } from "@theme://default/styles/mixin";

export const Wrap = styled.div`
  ${({ theme }) => theme.container("xs")};
  ${({ theme }) => theme.splitContainer("xs")};
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  transition: all 0.3s;
  &.align-right {
    margin-right: 0;
  }
  &.align-left {
    margin-left: 0;
  }
  ${MEDIA.sm.min`
    ${({ theme }) => theme.container("sm")};
    ${({ theme }) => theme.splitContainer("sm")};
  `};
  ${MEDIA.md.min`
    ${({ theme }) => theme.container("md")};
    ${({ theme }) => theme.splitContainer("md")};
  `};
  ${MEDIA.lg.min`
    ${({ theme }) => theme.container("lg")};
    ${({ theme }) => theme.splitContainer("lg")};
  `};
  ${MEDIA.xl.min`
    ${({ theme }) => theme.container("xl")};
    ${({ theme }) => theme.splitContainer("xl")};
  `};
`;
