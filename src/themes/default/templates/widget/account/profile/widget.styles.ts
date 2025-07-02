import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Wrap = styled(Template).attrs(() => ({
  template: "col",
  context: "grid"
}))`
  .connected-profile-image {
    width: 70px;
  }
`;

export const Card = styled(Template).attrs(() => ({
  template: "card",
  context: "component"
}))`
  min-height: 100%;
  .card-body {
    padding: 0;
    flex: 1;
  }
  &.no-results {
    .card-body {
      padding: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.25) 100%
  );
`;
export const ImageWrap = styled.div`
  position: relative;
  width: 150px;
  padding-bottom: 150px;
  border: 2px solid white;
  overflow: hidden;
  background: #103339;
  box-shadow: inset 3px 3px 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 7px;
`;
export const Info = styled.div`
  flex: 1;
`;
export const Name = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Contacts = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Controls = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: start;
  svg {
    cursor: move;
    max-width: 16px;
    path {
      fill: white !important;
    }
  }
`;

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
  transform: scale(0.7) translateY(-10px);
  transform-origin: top;

  &:before,
  &:after {
    position: absolute;
    left: 19px;
    bottom: 13px;
    content: " ";
    height: 20px;
    width: 3px;
    background-color: white;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const ConnectedName = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.palettes.primary.main};
`;

export const ConnectedAddress = styled.div`
  font-size: 0.8rem;
`;

export const NoConenctedProfiles = styled.div`
  text-align: center;
  max-width: 75%;
  margin: auto;
`;

export const Button = styled.button`
  border: none;
`;
