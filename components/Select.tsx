import React, { ReactNode, useState, Children } from "react";
import type * as Stitches from "@stitches/react";
import { useArrowKeyFocus } from "../hooks/useArrowKeyFocus";
import { SelectContext } from "../hooks/useSelectContext";
import { SelectDropdown } from "./SelectDropdown";
import { Option } from "./Option";
import { motion } from "framer-motion";
import { styled } from "../tokens/stitches.config";

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
      true: {
        "& div": {
          // NOTE: We would need to come to a different solution
          // than forcing this style through !important
          boxShadow: "$input-focus !important",
        },
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
  /**
   * Add
   */
  value?: string;
}

/**
 * Select lets you choose a single value from a list of options.
 */
export const Select: React.FC<SelectProps> = ({
  children,
  placeholder,
  defaultValue,
  size,
  ...props
}) => {
  /**
   * This is where we store the component's local state
   */
  const [value, setValue] = useState(defaultValue || "");
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useArrowKeyFocus(Children.count(children));

  /**
   * This handler helps us open the dropdown
   */
  const handleClick = () => setOpen(true);

  /**
   * This handler helps us change the selected value and reflect the change
   * in the component's local state.
   */
  const handleChange = (value: string) => {
    setValue(value);
    setOpen(!open);
  };

  /**
   * This handler helps us toggle the dropdown via key press
   */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      setOpen(!open);
    }
  };

  /**
   * Add description here.
   */
  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    const currentTarget = event.currentTarget;
    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setOpen(false);
      }
    });
  };

  /**
   * This is where we define corresponding animation states for our
   * select element and apply different styles per each state.
   */
  const variants = {
    closed: {
      scale: 1,
    },
    open: {
      scale: 0.97,
    },
  };

  // TODO: Comment this component whole component also the sections above
  return (
    <SelectContext.Provider value={{ value, changeValue: handleChange }}>
      {/**
       * StyledSelect is the overarching wrapper, which consumes the main props
       * related to the component's state, size etc. The individual UI elements like
       * the field container or the dropdown are nested inside. You can recognize them by their id values.
       */}
      <StyledSelect
        size={size}
        open={open}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        tabIndex={0}
        {...props}
      >
        {/**
         * This is the field container, which on the UI you see as the actual select field
         * that users interact with. It is also a motion.component which means you can define
         * it's animation behaviour via the variants or animate prop.
         */}
        <motion.div
          id="field-container"
          variants={variants}
          animate={open ? "open" : "closed"}
          onClick={handleClick}
        >
          {value.length > 0 ? (
            <span id="field-value">{open ? "true" : "false"}</span>
          ) : (
            <span id="field-placeholder">{placeholder}</span>
          )}
        </motion.div>

        <SelectDropdown open={open}>
          <Option placeholder>{placeholder}</Option>
          {React.Children.map(children, (child: any, index) =>
            React.cloneElement(child, {
              key: index,
              setFocus: setFocus,
              index: index,
              focus: focus === index,
            })
          )}
        </SelectDropdown>
      </StyledSelect>
    </SelectContext.Provider>
  );
};
