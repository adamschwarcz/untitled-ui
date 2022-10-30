import React, { ReactNode } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../tokens/stitches.config";

const StyledOption = styled("li", {
  /** ---------------------------------------------------------------------
   ** LOCAL COMPONENT STYLES
   ** Styles that are applied locally for this componnet, regardless of
   ** any prop configuration that is passed down to the component.
   ** ----------------------------------------------------------------- */

  // We pass these styled to the parent "StyledSelect" div elemnent
  display: "flex",
  alignItems: "center",
  width: "100%",
  paddingX: "$2",
  paddingY: "$2",
  fontSize: "$body-1",
  fontWeight: "$regular",
  color: "$input-tint",

  /** ---------------------------------------------------------------------
   ** VARIANTS:
   ** These styles are applied globally if a specific variant is
   ** enabled via the component's prop. In this section we also
   ** initialize all variants to get correct typing in TypeScript.
   ** ----------------------------------------------------------------- */
  variants: {
    placeholder: {
      true: {
        opacity: 0.4,
        borderColor: "$border-regular",
        borderBottomWidth: "1px",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderStyle: "solid",
      },
      false: {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "$surface-selected-faded",
        },

        "&:focus": {
          outline: "3px solid blue",
        },
      },
    },
  },

  /** ---------------------------------------------------------------------
   ** DEFAULT VARIANTS:
   ** The variants below are enabled by default, unless another variant
   ** is passed down to the component via the specific props.
   ** ------------------------------------------------------------------ */
  defaultVariants: {
    placeholder: false,
  },
});

interface OptionProps extends Stitches.VariantProps<typeof StyledOption> {
  /**
   * Lets you set option items using <Option> component via child nodes
   */
  children: ReactNode;

  /**
   * Configures the value
   */
  value?: string;
}

/**
 * Interactive element used for single-step actions.
 */
export const Option: React.FC<OptionProps> = ({ children, ...props }) => {
  return (
    <StyledOption tabIndex={0} {...props}>
      {children}
    </StyledOption>
  );
};
