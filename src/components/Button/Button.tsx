"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?:
    | "cta"
    | "landing-cta"
    | "sort-selector"
    | "aero-pay-dropdown"
    | "number-selector";
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
  border-radius: 18px;
  color: white;
  font-weight: 600;
  border: none;
  width: 100%;
  text-align: center;

  svg {
    * {
      background-color: white;
    }
  }

  ${({ $variant }) => $variant === "cta" && ctaStyles}
  ${({ $variant }) => $variant === "landing-cta" && landingCtaStyle}
  ${({ $variant }) => $variant === "aero-pay-dropdown" && aeroPayStyles}
  ${({ $variant }) => $variant === "sort-selector" && sortSelectorStyles}
  ${({ $variant }) => $variant === "number-selector" && numberSelectorStyles}
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
      onClick={variant === "aero-pay-dropdown" ? handleDropdownClick : onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const ctaStyles = css`
  color: white;
  border: none;

  padding: 30px 60px;

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
  padding: 32px 40px;

  &:hover {
    background: ${({ theme }) => theme.colors.brandHover};
  }

  svg {
    margin-left: 8px;
  }
`;

const sortSelectorStyles = css`
  background-color: ${({ theme }) => theme.colors.brand};
  background: ${({ theme }) => theme.colors.brand};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 20px;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral__300};
  }

  &:active {
    background: ${({ theme }) => theme.colors.brand};
  }
`;

const aeroPayStyles = css`
  background: ${({ theme }) => theme.colors.brand};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.neutral__500};
  padding: 10px 32px;

  &:hover {
    background: ${({ theme }) => theme.colors.brandHover};
  }

  svg {
    transition: transform 0.3s;
  }
`;

const numberSelectorStyles = css`
  background: ${({ theme }) => theme.colors.brandLight2};
  border: 0;
  color: white;
  padding: 12px 18px;

  svg {
    transition: transform 0.3s;
  }

  &:active {
    background: ${({ theme }) => theme.colors.brand};
    background: ${({ theme }) => theme.colors.brand};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background: ${({ theme }) => theme.colors.brand};

`;
