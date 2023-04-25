import React, { useState } from "react";
import { SelectContainer } from "components/Select";
import { SelectField } from "components/Select";
import { SelectProps } from "components/Select";
import { SelectContext } from "components/Select";
import Dropdown from "components/Dropdown";
import Option from "components/Option";

/**
 * Select lets you choose a single value from a list of options.
 */
export const Select: React.FC<SelectProps> = ({
  children,
  placeholder,
  defaultValue,
  ...props
}) => {
  /**
   * In this section we define all the available states of our component
   * using React's useState function.
   */
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || "");

  /**
   * This handleClick handler is primarily meant to be fired once our component is clicked.
   * Here we  manage the open/closed state of the dropdown menu as well as apply conditional styling.
   */
  const handleClick = () => setOpen(true);

  /**
   * The handleChange fires once the component registers a change in the selected values.
   * It is therefore closely tied to the SelectContext and we inject it in the
   * SelectContext.Provider "value" property.
   */
  const handleChange = (value: string) => {
    setValue(value);
    setOpen(!open);
  };

  /**
   * handleKeyPress is meant to be triggered if a keyboard event is registered.
   * The particular response to different keyboard keys are defined in here.
   * For example, if a user wants to select an option using their keyboard, we can
   * listen to the press of the Enter key, as demonstarted below.
   */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      setOpen(!open);
    }
  };

  /**
   * handleBlur is being triggered if the user focuses our of the select field.
   * This handler helps us close the dropdown menu and reset styling to default
   * upon such event.
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
   * select element and apply different animation behaviour per each state.
   */
  const variants = {
    closed: {
      scale: 1,
    },
    open: {
      scale: 0.97,
    },
  };

  return (
    <SelectContext.Provider value={{ value, changeValue: handleChange }}>
      <SelectContainer
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        tabIndex={0}
      >
        <SelectField
          variants={variants}
          animate={open ? "open" : "closed"}
          onClick={handleClick}
          {...props}
        >
          {value.length > 0 ? <span>{value}</span> : <span>{placeholder}</span>}
        </SelectField>
        <Dropdown open={open}>
          <Option value="" placeholder>
            {placeholder}
          </Option>
          {children}
        </Dropdown>
      </SelectContainer>
    </SelectContext.Provider>
  );
};

export default Select;
