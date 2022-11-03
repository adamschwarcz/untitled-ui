import { motion } from "framer-motion";
import { styled } from "tokens/stitches.config";

export const SelectContainer = styled("div", {
  display: "flex",
  position: "relative",
  width: "100%",

  "&:hover > div": {
    boxShadow: "$input-hover",
    transition: "$regular",
  },

  "&:focus > div": {
    boxShadow: "$input-focus",
    transition: "none",
  },

  "&:focus": {
    outline: "none",
  },
});

export const SelectField = styled(motion.div, {
  /** ---------------------------------------------------------------------
   ** LOCAL COMPONENT STYLES
   ** Styles that are applied locally for this componnet, regardless of
   ** any prop configuration that is passed down to the component.
   ** ----------------------------------------------------------------- */

  // These styles are passed to the child "motion.div" element that
  // acts as the select field in the UI
  display: "flex",
  alignItems: "center",
  width: "inherit",
  borderColor: "$input-border",
  borderWidth: "$input",
  borderStyle: "$input",
  backgroundColor: "$input-background",
  fontSize: "$body-1",
  fontWeight: "$regular",
  color: "$input-tint",
  cursor: "pointer",

  /** ---------------------------------------------------------------------
   ** VARIANTS:
   ** These styles are applied globally if a specific variant is
   ** enabled via the component's prop. In this section we also
   ** initialize all variants to get correct typing in TypeScript.
   ** ----------------------------------------------------------------- */
  variants: {
    /**
     * Add prop descriptions.
     */
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
    /**
     * Add prop descriptions.
     */
    open: {
      true: {
        boxShadow: "$input-focus !important",
      },
      false: {},
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
