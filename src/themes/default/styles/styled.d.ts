import "styled-components";
import { GridType, Palette, Palettes, Typography } from "./mixin.types";
import {
  buildColumn,
  buildContainer,
  pxToEm,
  spacing,
  fontScale,
  buildSplitContainer
} from "./mixin";
import { lighten, darken } from "@lib://utils";

declare module "styled-components" {
  export interface BaseTheme {
    background: string;
    typography: Typography;
    spacing: ReturnType<typeof spacing>;
    grid: GridType;
    palettes: Record<Palettes, Palette>;
  }
  export interface DefaultTheme extends BaseTheme {
    spacing: ReturnType<typeof spacing>;
    container: ReturnType<typeof buildContainer>;
    splitContainer: ReturnType<typeof buildSplitContainer>;
    column: ReturnType<typeof buildColumn>;
    pxToEm: ReturnType<typeof pxToEm>;
    lighten: typeof lighten;
    darken: typeof darken;
    fontScale: ReturnType<typeof fontScale>;
  }
}
