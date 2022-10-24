import React from "react";
import { createStitches } from "@stitches/react";
import { styled } from "../stitches.config";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

createStitches({
  theme: {
    colors: {
      "button-primary-solid-container": "$surface-primary-solid",
      "button-primary-solid-tint": "$tint-on-primary-solid",
    },
    space: {
      "button-small-paddingY": "$1",
      "button-small-paddingX": "$3",
    },
    sizes: {
      "button-small-height": "36px",
    },
    radii: {
      "button-small-container": "$round",
    },
  },
});

const StyledButton = styled("button", {
  height: "$button-small-height",
  paddingX: "$button-small-paddingX",
  paddingY: "$button-small-paddingY",
  backgroundColor: "$button-primary-solid-container",
  color: "$button-primary-solid-tint",
  borderRadius: "$button-small-container",
});

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
      <StyledButton>Styled Button</StyledButton>
    </>
  );
};
