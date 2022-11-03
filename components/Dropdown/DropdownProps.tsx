import { ReactNode } from "react";
import { StyledDropdown } from "components/Dropdown";
import type * as Stitches from "@stitches/react";

interface DropdownProps extends Stitches.VariantProps<typeof StyledDropdown> {
  /**
   * Lets you set option items using <Option> component via child nodes
   */
  children?: ReactNode;

  /**
   * TOOD: Add description here
   */
  open?: boolean;
}

export type { DropdownProps };
