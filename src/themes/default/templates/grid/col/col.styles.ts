import styled from "styled-components";

import { MEDIA } from "@theme://default/styles/mixin";

export const Wrap = styled.div.attrs(() => ({
  className: "col"
}))<any>`
  position: relative;
  ${({ theme }) => theme.column("xs")};
  ${MEDIA.sm.min`
    ${({ theme }) => theme.column("sm")};
  `};
  ${MEDIA.md.min`
    ${({ theme }) => theme.column("md")};
  `};
  ${MEDIA.lg.min`
    ${({ theme }) => theme.column("lg")};
  `};
  ${MEDIA.xl.min`
    ${({ theme }) => theme.column("xl")};
  `};
`;
