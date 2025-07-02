import {
  ALLOWED_WEIGHTS,
  BREAKPOINTS,
  DEVICES,
  PALETTE_NAMES
} from "./variables";
import { css } from "styled-components";

export type BreakPoints = (typeof BREAKPOINTS)[number];
export type Devices = (typeof DEVICES)[number];
export type Palettes = (typeof PALETTE_NAMES)[number];
export type FontWeights = (typeof ALLOWED_WEIGHTS)[number];

export type Typography = {
  fontFamily: string;
  fontWeight: FontWeights;
  fontSize: number;
  lineHeight: number;
  color: string;
};

export type GridType = {
  size: number;
  spacingFactor: number;
  spacing: number;
};

export interface BreakPoint {
  min: typeof css;
  max: typeof css;
  exact: typeof css;
}

export interface Palette {
  main: string;
  dark: string;
  light: string;
  text: string;
}
