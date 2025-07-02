import styled, { keyframes } from "styled-components";
import { Template } from "@4i4/theme-registry";

const openModal = keyframes`
  from {
    transform: translateX(-50%) translateY(calc(-100% - 10vh));
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

const closeModal = keyframes`
  from {
    transform: translateX(-50%) translateY(0);
  }
  to {
    transform: translateX(-50%) translateY(calc(-100% - 10vh));
  }
`;

export const Wrap = styled.div`
  animation: ${openModal} 0.3s forwards;
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  max-height: 80vh;
  z-index: 10;
  overflow-y: auto;
  width: 650px;
  max-width: 100%;
  &.closing {
    animation: ${closeModal} 0.3s forwards;
  }
`;

export const Container = styled(Template).attrs(() => ({
  template: "card",
  context: "component"
}))``;

export const CloseButton = styled.button`
  margin: 0;
  padding: 0;
  border: unset;
  background: unset;
  cursor: pointer;

  position: relative;
  width: 43px;
  height: 43px;
  z-index: 99;

  &:before,
  &:after {
    position: absolute;
    left: 19px;
    bottom: 13px;
    content: " ";
    height: 20px;
    width: 3px;
    background-color: ${({ theme }) => theme.palettes.primary.main};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Label = styled.div`
  small {
    line-height: 1;
  }
`;
