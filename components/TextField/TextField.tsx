import React from "react";
import { TextFieldProps } from "components/TextField";
import { StyledTextField } from "components/TextField";

/**
 * Interactive element used for single-step actions.
 */
export const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <StyledTextField type="text" {...props} />;
};

export default TextField;
