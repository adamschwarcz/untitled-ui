import React from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../tokens/stitches.config";

const StyledInput = styled("input", {
  /** ---------------------------------------------------------------------
   ** LOCAL COMPONENT STYLES
   ** Styles that are applied locally for this componnet, regardless of
   ** any prop configuration that is passed down to the component.
   ** ----------------------------------------------------------------- */
  width: "100%",
  borderColor: "$input-border",
  borderWidth: "$input",
  borderStyle: "$input",
  backgroundColor: "$input-background",
  fontSize: "$body-1",
  fontWeight: "$regular",
  color: "$input-tint",
  outline: "none",
  transition: "$regular",

  // This is where we define the styling of a component during
  // different interaction states like focus, hover or active
  "&::placeholder": {
    opacity: 0.5,
  },

  "&:hover": {
    boxShadow: "$input-hover",
  },

  "&:focus": {
    boxShadow: "$input-focus",
    transition: "none",
  },

  /** ---------------------------------------------------------------------
   ** VARIANTS:
   ** These styles are applied globally if a specific variant is
   ** enabled via the component's prop. In this section we also
   ** initialize all variants to get correct typing in TypeScript.
   ** ----------------------------------------------------------------- */
  variants: {
    size: {
      sm: {
        height: "$input-sm-height",
        paddingX: "$input-sm-paddingX",
        paddingY: "$input-sm-paddingY",
        borderRadius: "$input-sm",
      },
      md: {
        height: "$input-md-height",
        paddingX: "$input-md-paddingX",
        paddingY: "$input-md-paddingY",
        borderRadius: "$input-md",
      },
    },
  },

  /** ---------------------------------------------------------------------
   ** DEFAULT VARIANTS:
   ** The variants below are enabled by default, unless another variant
   ** is passed down to the component via the specific props.
   ** ------------------------------------------------------------------ */
  defaultVariants: {
    size: "md",
  },
});

interface TextFieldProps extends Stitches.VariantProps<typeof StyledInput> {
  /**
   * Configures the placeholder text
   */
  placeholder?: string;
  /**
   * Configures the value text
   */
  value?: string;
  /**
   * Custom id override
   */
  id?: string;
  /**
   * Optional onChange handler
   */
  onChange?: () => void;
}

/**
 * Interactive element used for single-step actions.
 */
export const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <StyledInput type="text" {...props} />;
};
