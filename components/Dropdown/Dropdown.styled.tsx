import { styled } from "tokens/stitches.config";
import { motion } from "framer-motion";

export const StyledDropdown = styled(motion.ul, {
  /** ---------------------------------------------------------------------
   ** LOCAL COMPONENT STYLES
   ** Styles that are applied locally for this componnet, regardless of
   ** any prop configuration that is passed down to the component.
   ** ----------------------------------------------------------------- */
  position: "absolute",
  overflow: "hidden",
  marginTop: "$2",
  padding: 0,
  width: "100%",
  backgroundColor: "$surface-basline",
  borderRadius: "$xs",
  borderColor: "$border-regular",
  borderWidth: "1px",
  borderStyle: "solid",
  outline: "3px solid white",
});
