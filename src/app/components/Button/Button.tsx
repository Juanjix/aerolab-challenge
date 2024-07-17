import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "cta" | "landing-cta" | "sort-selector";
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button<{ $variant: string }>`
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.cta};
  background: ${({ theme }) => theme.colors.brand};
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  svg {
    * {
      background-color: white;
    }
  }

  ${({ $variant }) => $variant === "cta" && ctaStyles}
  ${({ $variant }) => $variant === "landing-cta" && landingStyle}
  ${({ $variant }) => $variant === "sort-selector" && tertiaryStyles}
`;

const Button: React.FC<ButtonProps> = ({
  variant = "cta",
  children,
  onClick,
}) => {
  return (
    <StyledButton $variant={variant} onClick={onClick}>
      {variant === "cta" && <>{children}</>}
    </StyledButton>
  );
};

export default Button;

const ctaStyles = css`
  color: white;
  border: none;

  svg {
    margin-left: 12px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.brandHover};
  }

  &.processing {
    background: ${({ theme }) => theme.colors.specialSection};
  }

  &.disabled {
    background: ${({ theme }) => theme.colors.brandLight};
  }
`;

const landingStyle = css`
  background: ${({ theme }) => theme.colors.brand};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const tertiaryStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;
