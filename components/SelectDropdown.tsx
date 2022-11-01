import React, { ReactNode, useRef } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../tokens/stitches.config";
import { motion } from "framer-motion";

const StyledSelectDropdown = styled("ul", {
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

interface SelectDropdownProps
  extends Stitches.VariantProps<typeof StyledSelectDropdown> {
  /**
   * Lets you set option items using <Option> component via child nodes
   */
  children?: ReactNode;

  /**
   * TOOD: Add description here
   */
  open?: boolean;
}

/**
 * This is where we wrap StyledSelectDropdown in motion() function. This way
 * we transform our custom component into a animatable component to which
 * we can pass all of the original motion props like "animate" or "variants".
 */
type ComponentProps = JSX.IntrinsicElements["ul"];

const Component = React.forwardRef<HTMLUListElement, ComponentProps>(
  (props, ref) => (
    <StyledSelectDropdown {...props} ref={ref}>
      {props.children}
    </StyledSelectDropdown>
  )
);

Component.displayName = "Component";

const MotionSelectDropdown = motion(Component, { forwardMotionProps: true });

/**
 * This is where we define corresponding animation states for our
 * dropdown element and apply different styles per each state.
 */
const variants = {
  closed: {
    y: 25,
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.15,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.1 },
    },
  },
};

/**
 * This is where we declare our final SelectDropdown component that we're using
 * as an atomic component in the Select component.
 */
export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  children,
  open,
  ...props
}) => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <MotionSelectDropdown
      ref={ref}
      variants={variants}
      animate={open ? "open" : "closed"}
      {...props}
    >
      {children}
    </MotionSelectDropdown>
  );
};
