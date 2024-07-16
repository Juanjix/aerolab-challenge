import React from "react";
import styled, { css } from "styled-components";

// Icons
import IconAerolabCTA from "@/../public/icons/aerolab-icon-button-cta.svg";
import Arrow from "@/../public/icons/arrow-icon.svg";

interface ButtonProps {
  variant?: "cta" | "landing-cta" | "sort-selector";
  children?: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}

const StyledButton = styled.button<{ variant: string; selected?: boolean }>`
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.cta};
  background: ${({ theme }) => theme.colors.brand};

  ${({ variant }) => variant === "cta" && ctaStyles}
  ${({ variant }) => variant === "landing-cta" && landingStyle}
  ${({ variant }) => variant === "sort-selector" && sortSelectorStyles}
`;

const Button = ({
  variant = "cta",
  children,
  onClick,
  selected,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} selected={selected}>
      {variant === "cta" && (
        <>
          {children} <IconAerolabCTA />
        </>
      )}
      {variant === "landing-cta" && (
        <>
          {children} <Arrow />
        </>
      )}
      {variant === "sort-selector" && (selected ? "Selected" : "Select")}
      {children}
    </StyledButton>
  );
};

export default Button;

const ctaStyles = css`
  color: white;
  border: none;

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

const sortSelectorStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;
