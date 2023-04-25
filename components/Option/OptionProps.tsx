import { StyledOption } from "components/Option";
import type * as Stitches from "@stitches/react";

interface OptionProps extends Stitches.VariantProps<typeof StyledOption> {
  /**
   * Lets you set option items using <Option> component via child nodes
   */
  children?: string;

  /**
   * Configures the value
   */
  value: string;

  /**
   * TOOD: Add description here
   */
  label?: string;

  /**
   * TOOD: Add description here
   */
  focus?: boolean;

  /**
   * TOOD: Add description here
   */
  open?: boolean;

  /**
   * TOOD: Add description here
   */
  index?: any;

  /**
   * TOOD: Add description here
   */
  setFocus?: any;
}

export type { OptionProps };
