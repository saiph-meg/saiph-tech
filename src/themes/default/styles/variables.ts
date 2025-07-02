import { BreakPoints, Devices, Palette, Palettes } from "./mixin.types";

export const SCALE_FACTORS = [
  1.067, // Minor second
  1.125, // Major second
  1.2, // Minor third
  1.25, // Major third
  1.333, // Perfect fourth
  1.414, // Augmented fourth
  1.5, // Perfect fifth
  1.618 // Golden ratio
] as const;
export const ALLOWED_WEIGHTS = [400, 500, 600, 800] as const;

// DEFINE TYPOGRAPHY
export const FONT_FAMILY = ["Montserrat", "sans-serif"].join(",");
export const FONT_SIZE = 14;
export const FONT_WEIGHT = 400;
export const LINE_HEIGHT = 1.5;
export const SCALE_FACTOR = SCALE_FACTORS[1];
export const FONT_COLOR = "#212529";

export const BACKGROUND_COLOR = "#F1F4F9";

export const SPACING = 4;

// DEFINE GRID SIZES
export const GRID_SIZE = 12;
export const GRID_SPACING_FACTOR = 3;
export const MAX_SIZE = 800;

// DEFINE BREAKPOINTS
export const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"] as const;
export const BREAKPOINT_SIZES: Record<BreakPoints, number> = {
  xl: 1280,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 0
} as const;

// DEFINE DEVICES
export const DEVICES = ["mobile", "tablet", "desktop"] as const;
export const DEVICE_BREAKPOINTS: Record<Devices, BreakPoints> = {
  mobile: "xs",
  tablet: "md",
  desktop: "lg"
} as const;

// DEFINE COLOR PALETTES
export const PALETTE_NAMES = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
  "canvas"
] as const;
export const PALETTES: Record<Palettes, Palette> = {
  primary: {
    main: "#f03d9f",
    dark: "",
    light: "",
    text: "white"
  },
  secondary: {
    main: "#212529",
    dark: "",
    light: BACKGROUND_COLOR,
    text: "white"
  },
  error: {
    main: "#ff0000",
    dark: "",
    light: "",
    text: BACKGROUND_COLOR
  },
  warning: {
    main: "#ffa726",
    dark: "",
    light: "",
    text: FONT_COLOR
  },
  info: {
    main: "#29b6f6",
    dark: "",
    light: "",
    text: BACKGROUND_COLOR
  },
  success: {
    main: "#8dc53e",
    dark: "",
    light: "",
    text: "white"
  },
  canvas: {
    main: BACKGROUND_COLOR,
    dark: "#f5f5f5",
    light: "",
    text: FONT_COLOR
  }
};
