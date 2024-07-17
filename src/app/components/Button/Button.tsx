import React, { useState } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "cta" | "landing-cta" | "sort-selector" | "aero-pay";
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button<{ $variant: string; $isOpen?: boolean }>`
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
  border-radius: 18px;

  svg {
    * {
      background-color: white;
    }
  }

  ${({ $variant }) => $variant === "cta" && ctaStyles}
  ${({ $variant }) => $variant === "landing-cta" && landingStyle}
  ${({ $variant }) => $variant === "sort-selector" && tertiaryStyles}
  ${({ $variant }) => $variant === "aero-pay" && aeroPayStyles}
`;

const Button: React.FC<ButtonProps> = ({
  variant = "cta",
  children,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(); // Llama a onClick si está definido
  };

  return (
    <StyledButton
      $variant={variant}
      $isOpen={isOpen}
      onClick={variant === "aero-pay" ? handleDropdownClick : onClick}>
      {variant === "cta" && <>{children}</>}
      {variant === "aero-pay" && <>{children}</>}
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

const aeroPayStyles = css`
  background: ${({ theme }) => theme.colors.brand};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.neutral__500};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral__300};
  }

  svg {
    margin-left: 12px;
    transition: transform 0.3s;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;
