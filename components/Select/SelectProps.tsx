import { ReactNode } from "react";
import { StyledSelect } from "./Select.styled";
import type * as Stitches from "@stitches/react";

interface SelectProps extends Stitches.VariantProps<typeof StyledSelect> {
  /**
   * Configures the string value of the Select component.
   */
  value?: string;
  /**
   * Configures the default string value of the Select component.
   */
  defaultValue?: string;
  /**
   * Configures the placeholder string of the Select component.
   */
  placeholder?: string;
  /**
   * Handles the open/closed state of the Select and Dropdown,
   * in which the selectable options are presented.
   */
  open?: boolean;
  /**
   * Lets you inject children nodes inside the Select component.
   * You can only inject the "Option" component as a child for this component.
   */
  children?: ReactNode;
  /**
   * Lets you choose the size of your Select component.
   * It comes in two sizes "sm" and "md", which mainly differ in their height.
   */
  size?: "sm" | "md";
}

export type { SelectProps };
