import React, {
  ReactNode,
  useState,
  useRef,
  useCallback,
  Children,
} from "react";
import type * as Stitches from "@stitches/react";
import { motion } from "framer-motion";
import { styled } from "../tokens/stitches.config";
import { useClickAwayListener } from "../hooks/useClickAwayListener";
import { useArrowKeyFocus } from "../hooks/useArrowKeyFocus";
import { SelectContext } from "../hooks/useSelectContext";
import { Option } from "./Option";

const StyledSelect = styled("div", {
  /** ---------------------------------------------------------------------
   ** LOCAL COMPONENT STYLES
   ** Styles that are applied locally for this componnet, regardless of
   ** any prop configuration that is passed down to the component.
   ** ----------------------------------------------------------------- */

  // We pass these styled to the parent "StyledSelect" div elemnent
  display: "flex",
  position: "relative",
  width: "100%",

  // These styles are passed to the child "motion.div" element that
  // acts as the select field in the UI
  "& div": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderColor: "$input-border",
    borderWidth: "$input",
    borderStyle: "$input",
    backgroundColor: "$input-background",
    fontSize: "$body-1",
    fontWeight: "$regular",
    color: "$input-tint",
    cursor: "pointer",
  },

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

  // This is where we style the "motion.ul" element that acts
  // as the drodpown container in the UI
  "& ul": {
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
  },

  /** ---------------------------------------------------------------------
   ** VARIANTS:
   ** These styles are applied globally if a specific variant is
   ** enabled via the component's prop. In this section we also
   ** initialize all variants to get correct typing in TypeScript.
   ** ----------------------------------------------------------------- */
  variants: {
    size: {
      // This is where we apply styles specific to the
      // small-sized select variant
      sm: {
        "& div": {
          height: "$input-sm-height",
          paddingX: "$input-sm-paddingX",
          paddingY: "$input-sm-paddingY",
          borderRadius: "$input-sm",
        },
      },
      // This is where we apply styles specific to the
      // medium-sized select variant
      md: {
        "& div": {
          height: "$input-md-height",
          paddingX: "$input-md-paddingX",
          paddingY: "$input-md-paddingY",
          borderRadius: "$input-md",
        },
      },
    },
    open: {
      true: {},
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

interface SelectProps extends Stitches.VariantProps<typeof StyledSelect> {
  /**
   * Lets you set option items using <Option> component via child nodes
   */
  children?: ReactNode;
  /**
   * Sets input size
   */
  size?: "sm" | "md";
  /**
   * Handles dropdown open state
   */
  open?: boolean;
  /**
   * Configures the placeholder text
   */
  placeholder?: string;
  /**
   * Sets preselected value
   */
  defaultValue?: string;
}

/**
 * Select lets you choose a single value from a list of options.
 */

export const Select: React.FC<SelectProps> = ({
  children,
  placeholder,
  defaultValue,
  size,
  onBlur,
  ...props
}) => {
  /**
   * This is where we store the component's local state
   */
  const [value, setValue] = useState(defaultValue || "");
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useArrowKeyFocus(Children.count(children));
  const [isFocusInElement, setIsFocusInElement] = useState(false);
  const dropdownRef = useRef(null);

  /**
   * This handler helps us open the dropdown
   */
  const handleClick = () => setOpen(true);

  /**
   * This handler helps us open the dropdown
   */
  const handleClose = () => setOpen(false);

  /**
   * This handler helps us toggle the dropdown via key press
   */
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setOpen(!open);
    }
  };

  /**
   * This handler helps us change the selected value and reflect the change
   * in the component's local state.
   */
  const handleChange = (option: string) => {
    setValue(option);
    setOpen(false);
  };

  /**
   * This handler together with the custom useClickAway hook helps
   * us close menu upon clicking outside of the menu.
   */
  const handleClickAway = () => setOpen(false);
  useClickAwayListener(dropdownRef, handleClickAway);

  /**
   * This is where we define corresponding animation states for our
   * select element and apply different styles per each state.
   */
  const select = {
    closed: {
      scale: 1,
    },
    open: {
      scale: 0.97,
    },
  };

  /**
   * This is where we define corresponding animation states for our
   * dropdown element and apply different styles per each state.
   */
  const dropdown = {
    closed: {
      y: 25,
      opacity: 0,
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

  const handleBlur = useCallback(
    (e: any) => {
      const currentTarget = e.currentTarget;

      // Give browser time to focus the next element
      requestAnimationFrame(() => {
        // Check if the new focused element is a child of the original container
        if (!currentTarget.contains(document.activeElement)) {
          onBlur();
        }
      });
    },
    [onBlur]
  );

  // ----- The main component
  const ChildrenBlur = ({ children, onBlur, ...props }) => {
    const handleBlur = useCallback(
      (e) => {
        const currentTarget = e.currentTarget;

        // Give browser time to focus the next element
        requestAnimationFrame(() => {
          // Check if the new focused element is a child of the original container
          if (!currentTarget.contains(document.activeElement)) {
            onBlur();
          }
        });
      },
      [onBlur]
    );

    return (
      <div {...props} onBlur={handleBlur}>
        {children}
      </div>
    );
  };

  return (
    <SelectContext.Provider value={{ value, onChange: handleChange }}>
      <StyledSelect
        size={size}
        open={open}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
        tabIndex={0}
        onBlur={() => setIsFocusInElement(false)}
        onFocus={() => setIsFocusInElement(true)}
        {...props}
      >
        <motion.div variants={select} animate={open ? "open" : "closed"}>
          {value.length > 0 ? value : placeholder}
        </motion.div>
        <motion.ul
          variants={dropdown}
          animate={open ? "open" : "closed"}
          ref={dropdownRef}
        >
          <Option placeholder>{placeholder}</Option>
          <ChildrenBlur onBlur={() => setIsFocusInElement(false)}>
            {React.Children.map(children, (child: any, index) =>
              React.cloneElement(child, {
                key: index,
                setFocus: setFocus,
                index: index,
                focus: focus === index,
              })
            )}
          </ChildrenBlur>
        </motion.ul>
      </StyledSelect>
    </SelectContext.Provider>
  );
};
