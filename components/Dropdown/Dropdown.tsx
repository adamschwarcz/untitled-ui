import React, { useRef, Children } from "react";
import { useArrowKeyFocus } from "hooks/useArrowKeyFocus";
import { DropdownProps } from "components/Dropdown";
import { StyledDropdown } from "components/Dropdown";

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
export const Dropdown: React.FC<DropdownProps> = ({
  children,
  open,
  ...props
}) => {
  const [focus, setFocus] = useArrowKeyFocus(Children.count(children));
  const ref = useRef<HTMLUListElement>(null);

  return (
    <StyledDropdown
      ref={ref}
      variants={variants}
      animate={open ? "open" : "closed"}
      {...props}
    >
      {React.Children.map(children, (child: any, index) =>
        React.cloneElement(child, {
          key: index,
          index: index,
          focus: focus === index,
          setFocus: setFocus,
        })
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
