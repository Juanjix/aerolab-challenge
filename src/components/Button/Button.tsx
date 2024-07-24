"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?:
    | "cta"
    | "cta-processing"
    | "landing-cta"
    | "sort-selector"
    | "sort-selector-active"
    | "aero-pay-dropdown"
    | "number-selector"
    | "number-selector-active"
    | "dropdown-products";
  children: React.ReactNode;
  onClick: () => void;
}

interface StyledButtonProps {
  $variant: string;
  $isOpen?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
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
    width: 24px;
    height: 24px;

    @media (min-width: 920px) {
      width: 32px;
      height: 32px;
    }
  }

  .icons-small {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  ${({ $variant }) => $variant === "cta" && ctaStyles}
  ${({ $variant }) => $variant === "cta-processing" && ctaProcessing}
  ${({ $variant }) => $variant === "landing-cta" && landingCtaStyle}
  ${({ $variant }) => $variant === "aero-pay-dropdown" && aeroPayStyles}
  ${({ $variant }) => $variant === "sort-selector" && sortSelectorStyles}
  ${({ $variant }) =>
    $variant === "sort-selector-active" && sortSelectorActiveStyles}
  ${({ $variant }) => $variant === "number-selector" && numberSelectorStyles}
  ${({ $variant }) =>
    $variant === "number-selector-active" && numberSelectorActive}
  ${({ $variant }) => $variant === "dropdown-products" && dropdownProducts}
`;

const GradientText = styled.span`
  background: linear-gradient(102.47deg, #176feb 0%, #ff80ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback for browsers that do not support these properties */
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
      {variant === "aero-pay-dropdown" ? (
        <GradientText>{children}</GradientText>
      ) : (
        <>{children}</>
      )}
    </StyledButton>
  );
};

export default Button;

const ctaStyles = css`
  color: white;
  border: none;
  padding: 10px 60px;
  background: ${({ theme }) => theme.colors.brand};
  display: flex;
  align-items: center;
  justify-content: space-between;

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

const ctaProcessing = css`
  background: ${({ theme }) => theme.colors.specialSection};
  color: white;
  border: none;
  padding: 15px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const landingCtaStyle = css`
  background: ${({ theme }) => theme.colors.brand};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.brand};
  padding: 32px 40px;

  &:hover {
    background: ${({ theme }) => theme.colors.brandHover};
  }

  svg {
    margin-left: 8px;
  }
`;

const aeroPayStyles = css`
  background-clip: text;
  border: 1px solid ${({ theme }) => theme.colors.neutral__500};
  padding: 10px 10px;

  svg {
    transition: transform 0.3s;
  }
`;

// const sortSelectorStyles = css`

//   background-color: ${({ theme }) => theme.colors.neutral__200};
//   background: linear-gradient(102.47deg, #176feb 0%, #ff80ff 100%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent; /* Fallback for browsers that do not support these properties */
//   padding: 8px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     margin-right: 8px;
//   }

//   &:hover {
//     background: ${({ theme }) => theme.colors.brand};
//   }

//   &.active {
//     background: ${({ theme }) => theme.colors.brand};
//   }
// `;
const sortSelectorStyles = css`
  position: relative; /* Necesario para el ::before pseudo-element */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.colors.neutral__200}; /* Fondo del botón */
  color: transparent; /* Fallback for browsers that do not support these properties */
  padding: 8px 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) =>
      theme.colors.neutral__200}; /* Fondo del botón */
    border-radius: 18px;
    z-index: -1; /* Asegura que el fondo esté detrás del contenido */
  }

  .gradient-text {
    background: linear-gradient(102.47deg, #176feb 0%, #ff80ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent; /* Fallback for browsers that do not support these properties */
  }

  svg {
    margin-right: 8px;
  }
`;
const sortSelectorActiveStyles = css`
  background: ${({ theme }) => theme.colors.brand};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;

const numberSelectorStyles = css`
  background: ${({ theme }) => theme.colors.neutral__300};
  border: 0;
  color: white;
  padding: 12px 18px;

  svg {
    transition: transform 0.3s;
  }

  &.active {
    background: ${({ theme }) => theme.colors.brand};
  }
`;

const numberSelectorActive = css`
  background: ${({ theme }) => theme.colors.brand};
  border: 0;
  color: white;
  padding: 12px 18px;
`;

const dropdownProducts = css`
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  border-radius: 18px;
  padding: 12px 20px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral__600};
  background: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral__200};
  }
`;

const dropdownProductsActive = css`
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  border-radius: 18px;
  padding: 12px 20px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral__200};
  }

  svg {
    transform: rotate(90deg);
  }
`;
