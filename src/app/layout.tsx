"use client";

// Styled
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";

// Menu
import Menu from "@/components/Menu/Menu";

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
          <StyledComponentsRegistry>
            <Menu />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
