// stitches.config.ts
import { createStitches, globalCss } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Inter",
      src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')",
    },
  ],
});

export const { styled, css } = createStitches({
  theme: {
    /**
     * COLOR TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    colors: {
      // grey
      "grey-100": "#fff",
      "grey-200": "#f5f5f4",
      "grey-300": "#e7e5e4",
      "grey-400": "#d7d3d0",
      "grey-500": "#a9a29d",
      "grey-600": "#79716b",
      "grey-700": "#57534E",
      "grey-800": "#44403C",
      "grey-900": "#292524",
      "grey-1000": "#1C1917",

      // primary
      "primary-100": "#d1f0fc",
      "primary-200": "#a4ddf9",
      "primary-300": "#74bfee",
      "primary-400": "#4fa0de",
      "primary-500": "#1d75c8",
      "primary-600": "#155bac",
      "primary-700": "#0e4390",
      "primary-800": "#092f74",
      "primary-900": "#052160",
      "primary-1000": "#031130",

      // secondary
      "secondary-100": "#FEEBF4",
      "secondary-200": "#FDD7EC",
      "secondary-300": "#FAC2E7",
      "secondary-400": "#F6B0E4",
      "secondary-500": "#F096E2",
      "secondary-600": "#CE6DC8",
      "secondary-700": "#A94BAC",
      "secondary-800": "#7F2F8B",
      "secondary-900": "#601C73",
      "secondary-1000": "#220A29",

      // info
      "info-100": "#d1f0fc",
      "info-200": "#a4ddf9",
      "info-300": "#74bfee",
      "info-400": "#4fa0de",
      "info-500": "#1d75c8",
      "info-600": "#155bac",
      "info-700": "#0e4390",
      "info-800": "#000000",
      "info-900": "#000000",
      "info-1000": "#000000",

      // succes
      "success-100": "#d4f8dc",
      "success-200": "#abf2c2",
      "success-300": "#79daa3",
      "success-400": "#51b686",
      "success-500": "#238661",
      "success-600": "#19735a",
      "success-700": "#116052",
      "success-800": "#0b4d48",
      "success-900": "#053738",
      "success-1000": "#032021",

      // warning
      "warning-100": "#fdf1cc",
      "warning-200": "#fbe09a",
      "warning-300": "#f3c666",
      "warning-400": "#e7ab40",
      "warning-500": "#d38208",
      "warning-600": "#ae6405",
      "warning-700": "#9b5204",
      "warning-800": "#7d3d02",
      "warning-900": "#5b2901",
      "warning-1000": "#321701",

      // danger
      "danger-100": "#fde2d4",
      "danger-200": "#fbc0a9",
      "danger-300": "#f3937d",
      "danger-400": "#e7695a",
      "danger-500": "#d82c29",
      "danger-600": "#b91d28",
      "danger-700": "#9b1429",
      "danger-800": "#7d0d27",
      "danger-900": "#560621",
      "danger-1000": "#300312",

      // elevation
      "elevation-0": "rgba(28, 25, 23, 0)",
      "elevation-10": "rgba(28, 25, 23, 0.10)",
      "elevation-15": "rgba(28, 25, 23, 0.15)",
      "elevation-20": "rgba(28, 25, 23, 0.20)",
      "elevation-25": "rgba(28, 25, 23, 0.25)",
      "elevation-30": "rgba(28, 25, 23, 0.30)",
      "elevation-35": "rgba(28, 25, 23, 0.35)",
      "elevation-40": "rgba(28, 25, 23, 0.40)",
      "elevation-45": "rgba(28, 25, 23, 0.45)",
      "elevation-50": "rgba(28, 25, 23, 0.50)",
      "elevation-55": "rgba(28, 25, 23, 0.55)",
      "elevation-60": "rgba(28, 25, 23, 0.60)",
      "elevation-65": "rgba(28, 25, 23, 0.65)",
      "elevation-70": "rgba(28, 25, 23, 0.70)",
      "elevation-75": "rgba(28, 25, 23, 0.75)",
      transparent: "rgba(0, 0, 0, 0)",

      // surfaces
      "surface-background": "$grey-200",
      "surface-basline": "$grey-100",
      "surface-foreground": "$grey-200",
      "surface-transparent": "$transparent",
      "surface-neutral-solid": "$grey-800",
      "surface-neutral-faded": "$grey-200",
      "surface-primary-solid": "$primary-500",
      "surface-primary-faded": "$primary-200",
      "surface-selected-solid": "$secondary-500",
      "surface-selected-faded": "$secondary-100",
      "surface-info-solid": "$primary-500",
      "surface-info-faded": "$primary-100",
      "surface-success-solid": "$success-500",
      "surface-success-faded": "$success-100",
      "surface-warning-solid": "$warning-500",
      "surface-warning-faded": "$warning-100",
      "surface-danger-solid": "$danger-500",
      "surface-danger-faded": "$danger-100",

      // tints
      "tint-primary": "$grey-1000",
      "tint-secondary": "$grey-600",
      "tint-action": "$primary-500",
      "tint-selected": "$secondary-200",
      "tint-danger": "$danger-500",
      "tint-on-dark": "$grey-200",
      "tint-on-neutral-solid": "$grey-100",
      "tint-on-neutral-faded": "$grey-700",
      "tint-on-primary-solid": "$grey-100",
      "tint-on-primary-faded": "$primary-600",
      "tint-on-selected-solid": "$grey-100",
      "tint-on-selected-faded": "$primary-600",
      "tint-on-info-solid": "$grey-100",
      "tint-on-info-faded": "$primary-600",
      "tint-on-success-solid": "$grey-100",
      "tint-on-success-faded": "$success-600",
      "tint-on-warning-solid": "$grey-100",
      "tint-on-warning-faded": "$warning-600",
      "tint-on-danger-solid": "$grey-100",
      "tint-on-danger-faded": "$danger-600",

      // borders
      "border-none": "$transparent",
      "border-regular": "$grey-1000",
      "border-selected": "$secondary-500",

      // button
      "button-primary-solid-background": "$surface-primary-solid",
      "button-primary-solid-tint": "$tint-on-primary-solid",
      "button-primary-solid-border": "$border-regular",
      "button-neutral-solid-background": "$surface-neutral-solid",
      "button-neutral-solid-tint": "$tint-on-neutral-solid",
      "button-neutral-solid-border": "$border-regular",
      "button-danger-solid-background": "$surface-danger-solid",
      "button-danger-solid-tint": "$tint-on-danger-solid",
      "button-danger-solid-border": "$border-regular",
      "button-primary-outlined-background": "$surface-transparent",
      "button-primary-outlined-tint": "$tint-on-primary-faded",
      "button-primary-outlined-border": "$border-regular",
      "button-neutral-outlined-background": "$surface-transparent",
      "button-neutral-outlined-tint": "$tint-on-neutral-faded",
      "button-neutral-outlined-border": "$border-regular",
      "button-danger-outlined-background": "$surface-transparent",
      "button-danger-outlined-tint": "$tint-on-danger-faded",
      "button-danger-outlined-border": "$border-regular",
      "button-primary-ghost-background": "$surface-transparent",
      "button-primary-ghost-tint": "$tint-on-primary-faded",
      "button-primary-ghost-border": "$border-regular",
      "button-neutral-ghost-background": "$surface-transparent",
      "button-neutral-ghost-tint": "$tint-on-neutral-faded",
      "button-neutral-ghost-border": "$border-regular",
      "button-danger-ghost-background": "$surface-transparent",
      "button-danger-ghost-tint": "$tint-on-danger-faded",
      "button-danger-ghost-border": "$border-regular",

      // input
      "input-background": "$surface-baseline",
      "input-tint": "$tint-primary",
      "input-border": "$border-regular",
      "input-cursor": "$tint-selected",
    },

    /**
     * FONT TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    fonts: {
      // base
      base: "Inter, apple-system, sans-serif",

      // button
      button: "$base",
    },

    /**
     * FONT-SIZE TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    fontSizes: {
      // base
      "caption-1": "10px",
      "caption-2": "12px",
      "body-1": "14px",
      "body-2": "16px",
      "button-sm": "$body-1",
      "button-md": "$body-1",
    },

    /**
     * SPACE TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    space: {
      // base
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",

      // button
      "button-sm-paddingY": "$2",
      "button-sm-paddingX": "$3",
      "button-md-paddingY": "$2",
      "button-md-paddingX": "$4",

      // input
      "input-sm-paddingY": "$1",
      "input-sm-paddingX": "$2",
      "input-md-paddingY": "$1",
      "input-md-paddingX": "$2",
    },

    /**
     * RADIUS TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    radii: {
      // base
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      round: "999px",

      // button
      "button-sm": "$round",
      "button-md": "$round",

      // input
      "input-sm": "$xs",
      "input-md": "$xs",
    },

    /**
     * FONT-WEIGHT TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    fontWeights: {
      // base
      regular: 400,
      medium: 500,
      strong: 600,

      // button
      button: "$medium",
    },

    /**
     * ✅ LINE-HEIGHT TOKENS
     * These tokens are assignable to the "lineHeight" property. The line-height property sets the height of a line box.
     * It's commonly used to set the distance between lines of text.
     */
    lineHeights: {},

    /**
     * ✅ LETTER-SPACING TOKENS
     * These tokens are assignable to the "letterSpacing" property. It lets you sets the horizontal spacing behavior
     * between text characters. This value is added to the natural spacing between characters while rendering the text.
     */
    letterSpacings: {},

    /**
     * SIZE TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    sizes: {
      /**
       * button size tokens
       */
      "button-sm-height": "36px",
      "button-md-height": "40px",
      "input-sm-height": "36px",
      "input-md-height": "40px",
    },

    /**
     * BORDER-WIDTH TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    borderWidths: {
      /**
       * button border-width tokens
       */
      "button-solid": "1px",
      "button-outlined": "1px",
      "button-ghost": "1px",

      /**
       * input border-width tokens
       */
      input: "1px",
    },

    /**
     * BORDER-STYLE TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    borderStyles: {
      "button-solid": "solid",
      "button-outlined": "solid",
      "button-ghost": "solid",
      input: "solid",
    },

    /**
     * SHADOW TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    shadows: {
      /**
       * button shadow tokens
       */
      "button-hover": "3px 3px 0 0 $colors$border-regular",
      "button-focus-visible": "0 0 0 3px $colors$surface-selected-solid",

      /**
       * input shadow tokens
       */
      "input-hover": "3px 3px 0 0 $colors$border-regular",
      "input-focus":
        "0 0 0 3px $colors$surface-selected-solid, inset 3px 3px 0px $colors$elevation-10",
    },

    /**
     * Z-INDEX TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    zIndices: {},

    /**
     * TRANSITION TOKENS
     * The core visual principles like your palette, font or spacing scale are defined here.
     * We use the baseline tokens only as references inside system & component tokens.
     * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
     * We recommend to not apply these tokens directly to your UI elements.
     */
    transitions: {
      fast: "all 150ms", // ADD TO FIGMA TOKENS
      regular: "all 300ms", // ADD TO FIGMA TOKENS
    },
  },

  /**
   * STITCHES CUSTOM PROPERTIES a.k.a "utils"
   * The core visual principles like your palette, font or spacing scale are defined here.
   * We use the baseline tokens only as references inside system & component tokens.
   * Baseline tokens are also the only level of token abstraction where you define raw, hard-coded values.
   * We recommend to not apply these tokens directly to your UI elements.
   */
  utils: {
    paddingY: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    paddingX: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    overlay: (value: Stitches.ScaleValue<"colors">) => ({
      content: "",
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: value,
    }),
  },
});
