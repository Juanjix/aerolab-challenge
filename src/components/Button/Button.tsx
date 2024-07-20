"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "cta" | "landing-cta" | "sort-selector" | "aero-pay";
  children: React.ReactNode;

  onClick: () => void;
}

interface StyledButtonProps {
  $variant: string;
  $isOpen?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.cta};
  background: ${({ theme }) => theme.colors.brand};
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 18px;
  min-width: 143px;

  svg {
    * {
      background-color: white;
    }
  }

  ${({ $variant }) => $variant === "cta" && ctaStyles}
  ${({ $variant }) => $variant === "landing-cta" && landingCtaStyle}
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
    if (onClick) onClick();
  };

  return (
    <StyledButton
      $variant={variant}
      $isOpen={isOpen}
      onClick={variant === "aero-pay" ? handleDropdownClick : onClick}>
      {children}
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

const landingCtaStyle = css`
  background: ${({ theme }) => theme.colors.brand};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  svg {
    margin-left: 8px;
  }
`;

const tertiaryStyles = css`
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.primary};
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral__300};
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
    transition: transform 0.3s;
  }
`;
