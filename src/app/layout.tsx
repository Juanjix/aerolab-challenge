"use client";

// Styled
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";

// Menu
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";

// Meta
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Aerolab",
//   description: "Aerolab challenge by Juanso",
// };

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
            <Footer />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
