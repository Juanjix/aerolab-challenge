"use client";

// Styled
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
