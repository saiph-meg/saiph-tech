import styled from "styled-components";
import { MEDIA } from "@theme://default/styles/mixin";
import { Template } from "@4i4/theme-registry";

export const StyledForm = styled.form`
  width: 100%;
  &.processing {
    touch-action: none;
    pointer-events: none;
    > * {
      opacity: 0.5;
    }
    .loader {
      display: inline-block;
    }
  }
  .loader {
    opacity: 1;
    width: 100px;
    height: 100px;
    margin: 20px;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    position: fixed;
    display: none;
    circle {
      fill: ${({ theme }) => theme.palettes.primary.main};
    }
  }
`;

export const BtnGroup = styled.div`
  justify-content: center;
  margin: 30px 0;
`;

export const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.palettes.success.main};
  font-size: ${({ theme }) => theme.fontScale(2)}px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s;
  ${MEDIA.md.min`
    grid-template-columns: repeat(1, 1fr);
  `}
  > * {
    margin-bottom: 0;
  }
  &:first-child {
    margin-top: 2rem;
  }
  &.collapsed {
    overflow: hidden;
    max-height: 0;
    margin-bottom: 0;
  }
`;

export const PollWrap = styled.div`
  background-color: #efefef;
  position: relative;
  padding: 20px;
  ${MEDIA.md.min`
    padding: 90px;
  `};
`;

export const PollResults = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  canvas {
    height: 230px !important;
  }
  ${MEDIA.md.min`
    padding: 90px;
  `};
`;

export const PollSummary = styled.div`
  color: white;
  flex: 1;
  text-align: center;
  font-size: 1.2em;
`;

export const Row = styled(Template).attrs(() => ({
  template: "row",
  context: "grid"
}))`
  margin: 0;
`;

export const Col = styled(Template).attrs(() => ({
  template: "col",
  context: "grid",
  className: "xs-12 md-6"
}))`
  overflow: hidden;
  padding: 0;
`;
