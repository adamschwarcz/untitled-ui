import { styled } from "tokens/stitches.config";

export const StyledOption = styled("li", {
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
  outline: "none",

  /** ---------------------------------------------------------------------
   ** VARIANTS:
   ** These styles are applied globally if a specific variant is
   ** enabled via the component's prop. In this section we also
   ** initialize all variants to get correct typing in TypeScript.
   ** ----------------------------------------------------------------- */
  variants: {
    placeholder: {
      true: {
        boxSizing: "border-box",
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
          backgroundColor: "$surface-selected-faded",
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