import { FC } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Template } from "@4i4/theme-registry";

import GlobalCSS from "@theme://default/styles/GlobalCSS";
import { default as defaultTheme } from "@theme://default/styles/theme";
import { lighten, darken } from "@lib://utils";

import {
  buildColumn,
  buildContainer,
  buildSplitContainer,
  fontScale,
  pxToEm,
  spacing
} from "@theme://default/styles/mixin";

import { Body, Content, Main, Row } from "./page.styles";

const Page: FC<any> = ({ children }) => {
  const mixedTheme = { ...defaultTheme };
  const theme: DefaultTheme = {
    ...mixedTheme,
    spacing: spacing(mixedTheme),
    container: buildContainer(mixedTheme),
    splitContainer: buildSplitContainer(mixedTheme),
    column: buildColumn(mixedTheme),
    pxToEm: pxToEm(mixedTheme),
    lighten: lighten,
    darken: darken,
    fontScale: fontScale(mixedTheme)
  };

  return (
    <ThemeProvider theme={theme}>
      <Template template="document-head" context="layout" />
      <GlobalCSS />
      <Body>
        <Template template="header" context="layout" />
        <Content>
          <Row>
            <Template template="sidebar" context="layout" />
            <Main>{children}</Main>
          </Row>
        </Content>
        <Template template="footer" context="layout" />
      </Body>
    </ThemeProvider>
  );
};

export default Page;
