import React from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../tokens/stitches.config";

const StyledButton = styled("button", {
  /** ---------------------------------------------------------------------
   ** LOCAL COMPONENT STYLES
   ** Styles that are applied locally for this componnet, regardless of
   ** any prop configuration that is passed down to the component.
   ** ----------------------------------------------------------------- */
  transform: "perspective(0)",
  overflow: "hidden",
  cursor: "pointer",
  fontFamily: "$button-font-family",
  fontWeight: "$button-font-weight",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  outline: "none",

  // The "overlay" is an extra layer that is presented in front of the
  // button's container. The overlay property is a custom stitches util
  // which can be found in the stitches.config.ts in the root directory
  "&::before": {
    display: "none",
    overlay: "currentColor",
  },

  "&:hover::before": {
    display: "block",
  },

  "&:focus": {
    borderColor: "$border-none",
    boxShadow: "$button-focus-shadow",
  },

  /** ---------------------------------------------------------------------
   ** VARIANTS:
   ** These styles are applied globally if a specific variant is
   ** enabled via the component's prop. In this section we also
   ** initialize all variants to get correct typing in TypeScript.
   ** ----------------------------------------------------------------- */
  variants: {
    variant: {
      solid: {
        borderWidth: "$button-solid-border-width",
        borderStyle: "$button-solid-border-style",
      },
      outlined: {
        borderWidth: "$button-outlined-border-width",
        borderStyle: "$button-outlined-border-style",
      },
      ghost: {
        borderWidth: "$button-ghost-border-width",
        borderStyle: "$button-ghost-border-style",
      },
    },
    color: {
      primary: {},
      danger: {},
      neutral: {},
    },

    /**
     * Styles affecting different button sizes
     */
    size: {
      sm: {
        height: "$button-sm-height",
        paddingY: "$button-sm-paddingY",
        paddingX: "$button-sm-paddingX",
        fontSize: "$button-sm-font-size",
        borderRadius: "$button-sm-container",
      },
      md: {
        height: "$button-md-height",
        paddingY: "$button-md-paddingY",
        paddingX: "$button-md-paddingX",
        fontSize: "$button-md-font-size",
        borderRadius: "$button-md-container",
      },
    },
  },

  /** ---------------------------------------------------------------------
   ** COMPOUND VARIANTS:
   ** These styles are applied if specific variants combinations
   ** are enabled via the component's props.
   ** ------------------------------------------------------------------ */
  compoundVariants: [
    /**
     * Styles affecting "solid" button variants
     */
    {
      color: "primary",
      variant: "solid",
      css: {
        background: "$button-primary-solid-background",
        color: "$button-primary-solid-tint",
        borderColor: "$button-primary-solid-border",
      },
    },
    {
      color: "neutral",
      variant: "solid",
      css: {
        background: "$button-neutral-solid-background",
        color: "$button-neutral-solid-tint",
        borderColor: "$button-neutral-solid-border",
      },
    },
    {
      color: "danger",
      variant: "solid",
      css: {
        background: "$button-danger-solid-background",
        color: "$button-danger-solid-tint",
        borderColor: "$button-danger-solid-border",
      },
    },

    /**
     * Styles affecting "outlined" button variants
     */
    {
      color: "primary",
      variant: "outlined",
      css: {
        background: "$button-primary-outlined-background",
        color: "$button-primary-outlined-tint",
        borderColor: "$button-primary-outlined-border",
      },
    },
    {
      color: "neutral",
      variant: "outlined",
      css: {
        background: "$button-neutral-outlined-background",
        color: "$button-neutral-outlined-tint",
        borderColor: "$button-neutral-outlined-border",
      },
    },
    {
      color: "danger",
      variant: "outlined",
      css: {
        background: "$button-danger-outlined-background",
        color: "$button-danger-outlined-tint",
        borderColor: "$button-danger-outlined-border",
      },
    },

    /**
     * Styles affecting "ghost" button variants
     */
    {
      color: "primary",
      variant: "ghost",
      css: {
        background: "$button-primary-ghost-background",
        color: "$button-primary-ghost-tint",
        borderColor: "$button-primary-ghost-border",
      },
    },
    {
      color: "neutral",
      variant: "ghost",
      css: {
        background: "$button-neutral-ghost-background",
        color: "$button-neutral-ghost-tint",
        borderColor: "$button-neutral-ghost-border",
      },
    },
    {
      color: "danger",
      variant: "ghost",
      css: {
        background: "$button-danger-ghost-background",
        color: "$button-danger-ghost-tint",
        borderColor: "$button-danger-ghost-border",
      },
    },
  ],

  /** ---------------------------------------------------------------------
   ** DEFAULT VARIANTS:
   ** The variants below are enabled by default, unless another variant
   ** is passed down to the component via the specific props.
   ** ------------------------------------------------------------------ */
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
  },
});

interface ButtonProps extends Stitches.VariantProps<typeof StyledButton> {
  /**
   * Configures the button label text
   */
  children?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Interactive element used for single-step actions.
 */
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
