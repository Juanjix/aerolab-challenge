import { DefaultTheme } from "styled-components";

import "@fontsource/montserrat/900.css";

export const theme: DefaultTheme = {
  colors: {
    neutral: "#FFFFFF",
    neutral__100: "#F5F9FF",
    neutral__200: "#E6EDF7",
    neutral__300: "#DAE4F2",
    neutral__500: "#8FA3BF",
    neutral__600: "#7C899C",
    neutral__900: "#252F3D",
    brand: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
    brandHover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
    brandLight: "#E5F0FF",
    brandLight2: "#CCE1FF",
    green: "#29CC74",
    greenLight: "#CCFFE3",
    red: "#E07F4F",
    redLight: "#FFDFD9",
    specialsIlustration:
      "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
    specialSection:
      "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
    aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
  },
  fonts: {
    primary: "Montserrat",
  },
};
