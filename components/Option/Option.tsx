import React, { useEffect, useRef, useCallback } from "react";
import { useSelectContext } from "components/Select";
import { StyledOption } from "components/Option";
import { OptionProps } from "components/Option";

/**
 * Interactive element used for single-step actions.
 */
export const Option: React.FC<OptionProps> = ({
  index,
  focus,
  setFocus,
  children,
  placeholder,
  value,
  open,
  ...props
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const { changeValue } = useSelectContext();

  useEffect(() => {
    if (focus) {
      if (ref.current != null) {
        ref.current?.focus();
      }
    }
  }, [focus, open]);

  const handleSelect = useCallback(() => {
    if (placeholder != true) {
      setFocus(index);
      changeValue(value);
    }
  }, [changeValue, value, placeholder, index, setFocus]);

  return (
    <StyledOption
      ref={ref}
      placeholder={placeholder}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      tabIndex={focus ? 0 : -1}
      {...props}
    >
      {children}
    </StyledOption>
  );
};

export default Option;
