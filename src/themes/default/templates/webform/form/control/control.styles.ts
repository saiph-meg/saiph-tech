import styled from "styled-components";

export const Wrap = styled.div.attrs(() => ({
  className: "form-element"
}))<any>`
  width: 100%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(6)}px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.error {
    .form-control {
      box-shadow: 0 0 6px 0 rgba(237, 29, 37, 0.25);
    }
    label {
      &:before {
        border-color: ${({ theme }) => theme.palettes.error.main};
      }
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  transition: all 0.3s linear;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  text-align: left;
  letter-spacing: 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  font-size: 18px;
  font-weight: 300;
  transition: all 0.3s linear;
  padding: 0 0 10px;
  text-align: left;
  letter-spacing: 0;
  cursor: pointer;
  justify-content: space-between;
`;
export const CheckboxGroup = styled.div`
  max-height: 300vh;
  overflow: hidden;
  transition: max-height 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 5px;
  &.collapsed {
    max-height: 0;
  }
`;

export const RadiosLabel = styled.label.attrs(() => ({
  className: "h2"
}))`
  display: block;
  transition: all 0.3s linear;
  padding: 0 0 3vw;
  text-align: left;
  letter-spacing: 0;
`;

export const CheckboxWrap = styled(Wrap)`
  border-bottom: 1px solid #cbcbcb;
  padding-bottom: 20px;
  .btn {
    margin-top: 10px;
    font-size: 12px;
    line-height: 22px;
    width: 100%;
    text-align: left;
    &:hover {
      transform: unset;
    }
  }
`;

// @ts-ignore
export const InputGroup = styled.div.attrs(() => {
  "form-element-group";
})<any>`
  display: flex;
  flex-wrap: no-wrap;
  > * {
    padding-left: 0;
    padding-right: 0;
  }
  > :not(:first-child) {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: ${({ theme }) => theme.spacing(1.5)}px;
  }
  > :not(:last-child) {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: ${({ theme }) => theme.spacing(1.5)}px;
  }
`;

export const GroupItem = styled.span`
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 7px;
  line-height: 1.6;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(3)}px;
  // background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    max-height: 20px;
    max-width: 20px;
    path {
      transform: scale(1.6);
      transform-origin: center;
    }
  }
`;

export const GroupInput = styled.span`
  font-size: ${({ theme }) => theme.fontScale(1)}px;
  border: 1px solid #cccccc;
  border-radius: 7px;
  line-height: 1.6;
  background-color: #ffffff;
  input {
    display: block;
    height: 48px;
    width: 48px;
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.palettes.error.main};
  padding: 0 ${({ theme }) => theme.spacing(7.5)}px;
  font-size: 12px;
`;

export const ImageWrap = styled.label`
  width: 75%;
  padding-bottom: 75%;
  background-color: ${({ theme }) => theme.palettes.primary.main};
  border-radius: 50%;
  display: block;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("/images/default-profile-picture.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 50px;
    height: 50px;
    transform: translate(-50%, 50%);
    background-image: url("/images/photo-blie-img.png");
    background-size: cover;
    background-position: center;
    z-index: 2;
  }
  img {
    border-radius: 50%;
  }
  input {
    display: none;
  }
`;

export const BrowseButton = styled.label`
  width: 100%;
  text-align: center;
  input {
    display: none;
  }
`;

export const Desc = styled.div`
  display: block;
  font-size: 14px;
  transition: all 0.3s linear;
  padding: 0 24px 10px;
  text-align: left;
  letter-spacing: 0;
`;

export const ImagePreview = styled.div`
  width: 50%;
  padding-bottom: 28.125%;
  position: relative;
  margin: 0 auto;
  border-radius: 26px;
  overflow: hidden;
`;
