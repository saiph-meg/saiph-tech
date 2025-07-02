import { BaseTheme, css } from "styled-components";

import {
  BREAKPOINT_SIZES,
  BREAKPOINTS,
  DEVICE_BREAKPOINTS,
  DEVICES,
  PALETTE_NAMES,
  SCALE_FACTOR
} from "./variables";
import {
  BreakPoints,
  BreakPoint,
  Devices,
  GridType,
  Palettes,
  Palette
} from "./mixin.types";
import { lighten, darken } from "@lib://utils";

export const pxToEm =
  ({ typography }: BaseTheme) =>
  (value: number): number =>
    value / typography.fontSize;

export const getRelativeSize = BREAKPOINTS.reduce((sizes, breakpoint) => {
  sizes[breakpoint] = (size: number) =>
    `${((size * 100) / BREAKPOINT_SIZES[breakpoint]).toFixed(2)}vw`;
  return sizes;
  // eslint-disable-next-line no-unused-vars
}, {} as Record<BreakPoints, (size: number) => string>);

export const MEDIA = BREAKPOINTS.reduce((accumulator, label, index) => {
  accumulator[label] = { min: css, max: css, exact: css };
  const min = BREAKPOINT_SIZES[label];

  accumulator[label].min = (...args: [any, any]) => css`
    @media (min-width: ${min}px) {
      ${css(...args)};
    }
  `;

  if (typeof BREAKPOINTS[index + 1] !== "undefined") {
    const max = BREAKPOINT_SIZES[BREAKPOINTS[index + 1]] - 1;

    accumulator[label].exact = (...args: [any, any]) => css`
      @media (min-width: ${min}px) and (max-width: ${max}px) {
        ${css(...args)};
      }
    `;

    accumulator[label].max = (...args: [any, any]) => css`
      @media (max-width: ${max}px) {
        ${css(...args)};
      }
    `;
  } else {
    accumulator[label].exact = (...args: [any, any]) => css`
      @media (min-width: ${min}px) {
        ${css(...args)};
      }
    `;
  }

  return accumulator;
}, {} as Record<BreakPoints, BreakPoint>);

export const DEVICE = DEVICES.reduce((accumulator, device) => {
  accumulator[device] = MEDIA[DEVICE_BREAKPOINTS[device]].min;
  return accumulator;
}, {} as Record<Devices, typeof css>);

export const getDeviceByBreakpoint = (breakpoint: BreakPoints) => {
  const size = BREAKPOINT_SIZES[breakpoint];
  return DEVICES.find((device, index) => {
    const breakpoint = DEVICE_BREAKPOINTS[device];
    const nextBreakpoint = DEVICE_BREAKPOINTS?.[DEVICES?.[index + 1]];
    return (
      BREAKPOINT_SIZES[breakpoint] <= size &&
      (!nextBreakpoint || BREAKPOINT_SIZES[nextBreakpoint] > size)
    );
  });
};

export const buildColumnSizes = (grid: GridType) =>
  Array.from(Array(grid.size), (v: any, i) => (i + 1).toString()).reduce(
    (accumulator, value, index) => {
      accumulator[(index + 1).toString()] = ((index + 1) * 100) / grid.size;
      return accumulator;
    },
    {} as Record<string, number>
  );

export const buildColumn =
  ({ grid }: BaseTheme) =>
  (breakpoint: BreakPoints): ReturnType<typeof css> => {
    const sizes = buildColumnSizes(grid);
    const style = css`
      ${Object.keys(sizes).map(
        size => `
          &.${breakpoint}-${size}{ grid-column-end: span ${size}; }
          &.offset-${breakpoint}-${size}{ grid-column-start: ${size}; }
        `
      )};
    `;
    return style;
  };

export const buildContainer =
  ({ grid }: BaseTheme) =>
  (breakpoint: BreakPoints): ReturnType<typeof css> => {
    const size = BREAKPOINT_SIZES[breakpoint];

    if (size == 0) {
      return css`
        --container-size: auto;
        width: var(--container-size);
        padding: 0 ${grid.spacing}px;
      `;
    }
    const sizes = buildColumnSizes(grid);
    const gutter = grid.spacing * 2;
    const width = size - gutter;
    return css`
      --container-size: ${width}px;
      ${Object.keys(sizes).map(
        size =>
          `&.${breakpoint}-${size}{ width: calc(var(--container-size) * ${
            sizes[size] / 100
          }) }`
      )};
    `;
  };

export const buildSplitContainer =
  ({ grid }: BaseTheme) =>
  (breakpoint: BreakPoints): ReturnType<typeof css> => {
    const sizes = buildColumnSizes(grid);

    const style = css`
      ${Object.keys(sizes).map(size => {
        let percentage: any = sizes[size] / 100;
        percentage = percentage.toFixed(5);
        return [
          `&.${breakpoint}-${size}{
            width: calc(var(--container-size) * ${percentage}); 
            &.exclude-grip {
              width: calc(var(--container-size) * ${percentage} - ${
            grid.spacing * 2
          }px);
              &.align-left,
              &.align-right {
                width: calc(var(--container-size) * ${percentage} - ${
            grid.spacing
          }px);
              }
            }
          }`
        ];
      })};
    `;

    return style;
  };

export const buildVisibility = (
  breakpoint: BreakPoints
): ReturnType<typeof css> => {
  return css`
    .hide-${breakpoint} {
      ${MEDIA[breakpoint].exact`
          display: none !important;
        `}
    }
    .visible-${breakpoint} {
      display: none;
      ${MEDIA[breakpoint].exact`
          display: inherit;
        `}
    }
  `;
};

export const buildBackgroundPalettes = (
  palettes: Record<Palettes, Palette>
) => {
  return css`
    ${PALETTE_NAMES.map(
      name => `
      .bg-${name} {
        background-color: ${palettes[name].main};
        color: ${palettes[name].text};
      }
      .bg-${name}-dark {
        background-color: ${palettes[name].dark};
        color: ${palettes[name].text};
      }
      .bg-${name}-light {
        background-color: ${palettes[name].light};
        color: ${palettes[name].text};
      }
      ${Array.from(Array(10), (_, x) => (x + 1) * 10)
        .map(
          percent => `
        .bg-${name}-light-${percent} {
          background-color: ${lighten(palettes[name].light, percent)};
        }
        .bg-${name}-dark-${percent} {
          background-color: ${darken(palettes[name].light, percent)};
        }
      `
        )
        .join("")}
    `
    )}
  `;
};

export const buildLinkButton = (palettes: Record<Palettes, Palette>) => {
  return css`
    &.btn-default {
      background-color: ${({ theme }) => lighten(theme.typography.color, 30)};
      color: ${({ theme }) => theme.background};
      &:hover {
        background-color: ${({ theme }) => theme.typography.color};
      }
    }
    ${PALETTE_NAMES.map(
      name => `
      &.btn-${name}{
        background-color: ${palettes[name].main};
        color: ${palettes[name].text};
        &:hover {
          background-color: ${palettes[name].dark};
        }
        &-hollow {
          border-color: ${palettes[name].main};
          background-color: white;
          color: ${palettes[name].main};
          &:hover {
            color: ${palettes[name].text};
            background-color: ${palettes[name].dark};
          }
        }
        &-link {
          background-color: transparent;
          color: ${palettes[name].main};
          padding: 0 !important;
          &:hover {
            color: ${palettes[name].dark};
            background-color: transparent;
          }
        }
      }
    `
    )}
  `;
};

// @ts-ignore
export const spacing =
  // @ts-ignore


    ({ spacing }: BaseTheme) =>
    (factor: number): number =>
      spacing * factor;

export const fontScale =
  ({ typography }: BaseTheme) =>
  (factor: number) => {
    return Math.ceil(
      typography.fontSize * Math.pow(SCALE_FACTOR, factor)
    ).toFixed(0);
  };

export const UNSTYLED_BUTTON = css`
  border: unset;
  background: unset;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
