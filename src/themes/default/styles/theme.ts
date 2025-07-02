import { BaseTheme } from "styled-components";

import {
  BACKGROUND_COLOR,
  FONT_COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  GRID_SIZE,
  GRID_SPACING_FACTOR,
  LINE_HEIGHT,
  PALETTES,
  SPACING
} from "./variables";
import { lighten, darken } from "@lib://utils";
import { Palettes } from "./mixin.types";

const theme: BaseTheme = {
  background: BACKGROUND_COLOR,
  typography: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    color: FONT_COLOR
  },
  grid: {
    size: GRID_SIZE,
    spacingFactor: GRID_SPACING_FACTOR,
    spacing: SPACING * GRID_SPACING_FACTOR
  },
  spacing: SPACING,
  palettes: PALETTES
};

let key: Palettes;
for (key in theme.palettes) {
  if (theme.palettes[key].light == "")
    theme.palettes[key].light = lighten(theme.palettes[key].main, 20);
  if (theme.palettes[key].dark == "")
    theme.palettes[key].dark = darken(theme.palettes[key].main, 20);
}

export default theme;
