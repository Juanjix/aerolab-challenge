"use client";

// Styled
import styled from "styled-components";
import StyledComponentsRegistry from "./registry";

const StyledLayout = styled.body``;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledLayout>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </StyledLayout>
    </html>
  );
}
