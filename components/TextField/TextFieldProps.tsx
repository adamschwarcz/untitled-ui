import type * as Stitches from "@stitches/react";
import { StyledTextField } from "components/TextField";

interface TextFieldProps extends Stitches.VariantProps<typeof StyledTextField> {
  /**
   * Configures the placeholder text
   */
  placeholder?: string;
  /**
   * Configures the value text
   */
  value?: string;
  /**
   * Custom id override
   */
  id?: string;
  /**
   * Optional onChange handler
   */
  onChange?: () => void;
}

export type { TextFieldProps };
