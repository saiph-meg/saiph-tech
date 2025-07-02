import { darken } from "@lib://utils";
import React, { FC } from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import {
  buildBackgroundPalettes,
  buildLinkButton,
  buildVisibility
} from "./mixin";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/Montserrat-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Audiowide';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/Audiowide-Regular.ttf) format('truetype');
  }

  * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    font-size: ${({ theme }) => theme.typography.fontSize}px;
    line-height: ${({ theme }) => theme.typography.lineHeight};
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.typography.color};
    background-color: ${({ theme }) => theme.background};
    overflow-x: hidden;
  }
  
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }

  a {
    font-weight: 400;
    line-height: 22px;
    text-decoration: none;
    color: ${({ theme }) => theme.palettes.primary.main};
    transition: color 0.4s ease;
    &:hover {
      color: ${({ theme }) => theme.palettes.primary.dark};
    }
  }
  
  p {
    margin: ${({ theme }) => theme.grid.spacing}px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin: 0;
    }
  }
  
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: "Audiowide", sans-serif;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    line-height: 1.25;
    &.light {
      font-weight: bold;
    }
  }
  h1, .h1 {
    font-size: ${({ theme }) => theme.fontScale(5)}px;
  }
  h2, .h2 {
    font-size: ${({ theme }) => theme.fontScale(4)}px;
  }
  h3, .h3 {
    font-size: ${({ theme }) => theme.fontScale(3)}px;
  }
  h4, .h4 {
    font-size: ${({ theme }) => theme.fontScale(2)}px;
  }
  h5, .h5 {
    font-size: ${({ theme }) => theme.fontScale(1)}px;
  }
  h6, .h6 {
    font-size: ${({ theme }) => theme.fontScale(0)}px;
  }
  
  b, strong {
    font-weight: 600;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }
  
  .text-success {
    color: ${({ theme }) => theme.palettes.success.main};
  }
  .text-warning {
    color: ${({ theme }) => theme.palettes.warning.main};
  }
    
  ${buildVisibility("xs")}
  ${buildVisibility("sm")}
  ${buildVisibility("md")}
  ${buildVisibility("lg")}
  ${buildVisibility("xl")}

  ${({ theme }) => buildBackgroundPalettes(theme.palettes)};

  .btn-group {
    display: flex;
    gap: ${({ theme }) => theme.spacing(8)}px;
    &.btn-group-center {
      justify-content: center;
    }
    &.condensed {
      > .btn {
        &:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          margin-left: 0;
        }
        &:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 0;
        }
      }
    }
  }

  .btn {
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 7px;
    padding: ${({ theme }) => theme.spacing(2)}px ${({ theme }) =>
  theme.spacing(3)}px;
    text-decoration: none;
    line-height: 1.6;
    cursor: pointer;
    font-weight: 400;
    transition: .55s color cubic-bezier(.4,0,1,1),.3s background cubic-bezier(0,.07,.5,1.17),.3s border cubic-bezier(0,.07,.5,1.17),.58s transform cubic-bezier(0,.07,.5,1.17),.58s;
    color: ${({ theme }) => theme.typography.color};

    &:hover {
      color: ${({ theme }) => theme.typography.color};
    }

    ${({ theme }) => buildLinkButton(theme.palettes)};

    &:disabled {
      cursor: none;
      opacity: 0.5;
    }
    
    &.btn-block {
      display: block;
      width: 100%;
      text-align: center;
    }
    
    &.btn-sm {
      border-radius: 20px;
      padding: 5px 15px;
      font-size: 14px;
      font-weight: 300;
    }
    
    &.btn-lg {
      border-radius: ${({ theme }) => theme.spacing(5)}px;
      padding: ${({ theme }) => theme.spacing(2)}px ${({ theme }) =>
  theme.spacing(5)}px;
      font-size: ${({ theme }) => theme.fontScale(0.7)}px;
    }
    
    &.btn-xl {
      border-radius: ${({ theme }) => theme.spacing(3)}px;
      padding: ${({ theme }) => theme.spacing(4)}px ${({ theme }) =>
  theme.spacing(16)}px;
      font-size: ${({ theme }) => theme.fontScale(2)}px;
    }
  }


  
  .modal-overlay {
    background-color: rgba(0,0,0,0.75) !important;
  }
  
  #cookie_law_notification {
    &.cookielaw4 {
      display: flex;
      justify-content: center;
      
      background-color: ${({ theme }) =>
        theme.palettes.primary.main} !important;
      color: ${({ theme }) => theme.palettes.primary.text};
      #cookie_message {
        max-width: 800px;
      }
      #cookie_accept_button {
        background-color: ${({ theme }) =>
          theme.palettes.secondary.main} !important;
        color: ${({ theme }) => theme.palettes.secondary.text} !important;
      }
    }
  }
  
  .bg-canvas-dark {
    color: ${({ theme }) => theme.palettes.canvas.text};
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    th {
      background-color: ${({ theme }) => theme.palettes.canvas.main};
      border-bottom: 1px solid
            ${({ theme }) => darken(theme.palettes.canvas.dark, 10)};
    }
    th,
    td {
      padding: ${({ theme }) => theme.grid.spacing}px;
    }
    tr {
      &:not(:last-child) {
        td {
          border-bottom: 1px solid
            ${({ theme }) => darken(theme.palettes.canvas.dark, 10)};
        }
      }
    }
  }
  
  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
  
  .disabled {
    opacity: 0.5;
    touch-action: none;
    pointer-events: none;
  }
`;

const GlobalCSS: FC<any> = props => (
  <>
    <Normalize />
    <GlobalStyle {...props} />
  </>
);

export default GlobalCSS;
