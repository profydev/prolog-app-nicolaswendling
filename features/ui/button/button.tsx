import { color, space, textFont } from "@styles/theme";
import styled, { css } from "styled-components";
import { ButtonNude } from "./button-nude";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  empty_gray = "empty_gray",
  error = "error",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled: boolean;
};

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  disabled = false,
}: ButtonProps) {
  return (
    <Container size={size} color={color} disabled={disabled}>
      {children}
    </Container>
  );
}

const Container = styled(ButtonNude)<{
  size: ButtonSize;
  color: ButtonColor;
  disabled: boolean;
}>`
  border-radius: ${space(2)};
  padding: 9px 15px;
  ${textFont("sm", "medium")}

  transition: color 350ms ease-out, background-color 350ms ease-out,
    border-color 350ms ease-out, box-shadow 350ms ease-out;

  &[disabled] {
    cursor: default;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }

  // SIZES
  ${(props) => {
    if (props.size === ButtonSize.sm) {
      return css`
        padding: 7px 13px;
      `;
    }
    if (props.size === ButtonSize.lg) {
      return css`
        ${textFont("md", "medium")}
        padding: 9px 17px;
      `;
    }
    if (props.size === ButtonSize.xl) {
      return css`
        ${textFont("md", "medium")}
        padding: 11px 19px;
      `;
    }
  }}

  // COLORS AND STATES
  ${(props) => {
    if (props.color === ButtonColor.primary) {
      if (props.disabled) {
        return css`
          background: ${color("primary", 200)};
          border: 1px solid ${color("primary", 200)};
          color: ${color("primary", 0)};
        `;
      }

      return css`
        background: ${color("primary", 600)};
        border: 1px solid ${color("primary", 600)};
        color: ${color("primary", 0)};

        &:hover {
          background: ${color("primary", 700)};
          border: 1px solid ${color("primary", 700)};
        }

        &:focus {
          background: ${color("primary", 600)};
          border: 1px solid ${color("primary", 600)};
          box-shadow: 0 0 0 4px ${color("primary", 100)};
        }
      `;
    }

    if (props.color === ButtonColor.secondary) {
      if (props.disabled) {
        return css`
          background: ${color("primary", 25)};
          border: 1px solid ${color("primary", 25)};
          color: ${color("primary", 300)};
        `;
      }

      return css`
        background: ${color("primary", 50)};
        border: 1px solid ${color("primary", 50)};
        color: ${color("primary", 700)};

        &:hover {
          background: ${color("primary", 100)};
          border: 1px solid ${color("primary", 100)};
        }

        &:focus {
          background: ${color("primary", 50)};
          border: 1px solid ${color("primary", 50)};
          box-shadow: 0 0 0 4px ${color("primary", 100)};
        }
      `;
    }

    if (props.color === ButtonColor.gray) {
      if (props.disabled) {
        return css`
          background: ${color("gray", 0)};
          border: 1px solid ${color("gray", 200)};
          color: ${color("gray", 200)};
        `;
      }

      return css`
        background: ${color("gray", 0)};
        border: 1px solid ${color("gray", 300)};
        color: ${color("gray", 700)};

        &:hover {
          background: ${color("gray", 50)};
          color: ${color("gray", 800)};
        }

        &:focus {
          background: ${color("gray", 0)};
          border: 1px solid ${color("gray", 300)};
          color: ${color("gray", 700)};
          box-shadow: 0 0 0 4px ${color("gray", 100)};
        }
      `;
    }

    if (props.color === ButtonColor.error) {
      if (props.disabled) {
        return css`
          background: ${color("error", 200)};
          border: 1px solid ${color("error", 200)};
          color: ${color("error", 0)};
        `;
      }

      return css`
        background: ${color("error", 600)};
        border: 1px solid ${color("error", 600)};
        color: ${color("error", 0)};

        &:hover {
          background: ${color("error", 700)};
          border: 1px solid ${color("error", 700)};
        }

        &:focus {
          background: ${color("error", 600)};
          border: 1px solid ${color("error", 600)};
          box-shadow: 0 0 0 4px ${color("error", 100)};
        }
      `;
    }

    if (props.color === ButtonColor.empty) {
      if (props.disabled) {
        return css`
          background: transparent;
          border: 1px solid transparent;
          color: ${color("gray", 300)};
        `;
      }

      return css`
        background: transparent;
        border: 1px solid transparent;
        color: ${color("primary", 600)};

        &:hover {
          background: ${color("primary", 50)};
          border: 1px solid ${color("primary", 50)};
          color: ${color("primary", 700)};
        }

        &:focus {
          color: ${color("primary", 700)};
        }
      `;
    }

    if (props.color === ButtonColor.empty_gray) {
      if (props.disabled) {
        return css`
          background: transparent;
          border: 1px solid transparent;
          color: ${color("gray", 300)};
        `;
      }

      return css`
        background: transparent;
        border: 1px solid transparent;
        color: ${color("gray", 500)};

        &:hover {
          background: ${color("gray", 50)};
          border: 1px solid ${color("gray", 50)};
          color: ${color("gray", 600)};
        }

        &:focus {
          color: ${color("gray", 600)};
        }
      `;
    }
  }};
`;
