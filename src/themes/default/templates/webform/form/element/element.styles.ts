import styled from "styled-components";
import { darken } from "~/lib/utils";

export const Input = styled.input.attrs(() => ({
  className: "form-control"
}))<any>`
  --input-border-color: ${({ theme }) => darken(theme.background, 20)};
  font-size: 16px;
  font-weight: 400;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(3)}px;
  display: block;
  border: 0;
  width: 100%;
  background-color: white;
  border-radius: 7px;
  transition: all 0.3s linear, border-radius 0;
  border: 1px solid var(--input-border-color);
  line-height: 1.6;
  text-align: left;
  position: relative;
  max-height: 50px;
  ::placeholder {
    font-size: 13px;
  }
  &:focus,
  &:active {
    outline: none;
  }
  &.small {
    padding: ${({ theme }) => theme.spacing(3)}px
      ${({ theme }) => theme.spacing(4)}px;
    font-size: 14px;
    li {
      margin: 0 ${({ theme }) => theme.spacing(4)}px;
    }
  }
`;

export const Textarea = styled(Input).attrs(() => ({
  as: "textarea"
}))<any>`
  max-height: unset;
`;

export const Select = styled(Input).attrs(() => ({
  as: "div"
}))<any>`
  display: flex;
  cursor: pointer;
  select {
    display: none;
  }
  &.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
  }
  &.small {
    li {
      font-size: 14px;
      input {
        padding: ${({ theme }) => theme.spacing(2)}px
          ${({ theme }) => theme.spacing(3)}px;
        font-size: 14px;
      }
    }
  }
`;

export const SelectValue = styled.span`
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &.placeholder {
    color: #828282;
  }
`;

export const SelectArrow = styled.span`
  width: 13px;
  height: 8px;
  margin: auto 0;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 60%;
    top: 50%;
    margin-top: 0;
    background-color: ${({ theme }) => theme.typography.color};
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  &:before {
    left: 0;
    transform: rotate(45deg);
  }
  &:after {
    right: 0;
    transform: rotate(-45deg);
  }

  &.active {
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
`;

export const Options = styled.ul.attrs(() => ({
  className: "form-select-options"
}))<any>`
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  max-height: 0;
  background-color: white;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 0 solid var(--input-border-color);
  border-top: none;
  z-index: 12;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  overflow: auto;
  font-size: ${({ theme }) => theme.fontScale(0)}px;
  line-height: ${({ theme }) => theme.fontScale(0)}px;
  &.expand-to-top {
    top: auto;
    bottom: -1px;
  }
  &.open {
    border-width: 1px;
    max-height: 300px;
  }
`;

export const Option = styled.li`
  padding: ${({ theme }) => theme.spacing(3)}px 0;
  margin: 0 ${({ theme }) => theme.spacing(3)}px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  background-color: white;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid var(--input-border-color);
  }
  &.disabled {
    border: none;
  }
  &.sticky {
    position: sticky;
    top: 0;
    z-index: 2;
  }
  &.selected,
  &:hover:not(.disabled) {
    color: ${({ theme }) => theme.palettes.primary.main};
  }
  &.selected {
    cursor: not-allowed;
  }
  &.multiple:not(.disabled) {
    vertical-align: center;
    &:before {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid var(--input-border-color);
      content: "";
      margin-right: 12px;
      vertical-align: middle;
    }
    &:after {
      content: "";
      display: inline-block;
      width: 10px;
      height: 5px;
      border-bottom: 1px solid ${({ theme }) => theme.palettes.primary.main};
      border-left: 1px solid ${({ theme }) => theme.palettes.primary.main};
      transform: rotate(-45deg);
      position: absolute;
      left: 5px;
      top: 18px;
      opacity: 0;
    }
    &.selected {
      &:after {
        opacity: 1;
      }
    }
  }
`;

export const OptionSearch = styled(Input)`
  border-radius: 0;
`;

export const CheckboxLabel = styled.label`
  font-size: 12px;
  line-height: 22px;
  display: flex;
  cursor: pointer;
  position: relative;
  input {
    display: none;
  }
  &.btn {
    &:before,
    &:after {
      display: none;
    }
  }
  &:before {
    display: inline-block;
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    border: 1px solid #6b6b6b;
    content: "";
    margin-right: 12px;
    vertical-align: middle;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.palettes.primary.main};
    border-left: 1px solid ${({ theme }) => theme.palettes.primary.main};
    transform: rotate(-45deg);
    position: absolute;
    left: 5px;
    top: 6px;
    opacity: 0;
  }
  &.checked {
    h6 {
      color: ${({ theme }) => theme.palettes.primary.main};
    }
    &:after {
      opacity: 1;
    }
  }
`;

export const RadioLabel = styled.label`
  background-color: #dedede;
  width: 100%;
  padding: 2vw 3vw;
  font-size: 26px;
  line-height: 34px;
  display: flex;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  border-radius: 12px;
  input {
    display: none;
  }
  &:before {
    display: inline-block;
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;
    border: 2px solid #9c9c9c;
    content: "";
    margin-right: 12px;
    vertical-align: middle;
    border-radius: 50%;
    transition: all 0.3s;
    background: linear-gradient(
      to bottom,
      rgba(198, 198, 198, 1) 0%,
      rgba(204, 204, 204, 1) 100%
    );
  }
  &:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.palettes.primary.main};
    border-left: 1px solid ${({ theme }) => theme.palettes.primary.main};
    transform: scale(1.4) rotate(-45deg);
    position: absolute;
    left: calc(3vw + 10px);
    top: calc(2vw + 10px);
    opacity: 0;
    transition: all 0.3s;
  }
  &.checked {
    background-color: ${({ theme }) => theme.palettes.primary.main};
    color: ${({ theme }) => theme.palettes.primary.text};
    &:before {
      border-color: white;
      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.palettes.primary.main} 0%,
        ${({ theme }) => theme.palettes.primary.dark} 100%
      );
    }
    &:after {
      opacity: 1;
      border-color: white;
    }
  }
`;

export const CheckboxButton = styled(Input).attrs(() => ({
  as: "label"
}))<any>`
  font-size: 12px;
  line-height: 22px;
  display: flex;
  cursor: pointer;
  position: relative;
  transform: unset !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  max-height: 50px;
  padding: ${({ theme }) => theme.spacing(3)}px
    ${({ theme }) => theme.spacing(4)}px;
  input {
    display: none;
  }
  &.active {
    border-color: ${({ theme }) => theme.palettes.primary.main};
    color: ${({ theme }) => theme.palettes.primary.main};
  }
`;

export const RadiosWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;
