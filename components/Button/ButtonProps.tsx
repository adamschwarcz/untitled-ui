import { StyledButton } from "./Button";
import type * as Stitches from "@stitches/react";

interface ButtonProps extends Stitches.VariantProps<typeof StyledButton> {
  /**
   * Configures the button label text
   */
  children?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export type { ButtonProps };
