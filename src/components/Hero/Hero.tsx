import React from "react";

// Styled
import styled from "styled-components";

// Components
import Button from "../Button/Button";

// Icons

import { Arrow } from "../../../public/icons/arrow";

// URL del SVG
const svgUrl = "/icons/background-wave.svg";

const StyledHero = styled.section`
  text-align: center;
  background: url(${svgUrl}) repeat;

  .uppercase {
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  .titulo {
    margin: 20px 0 30px 0;
    text-transform: uppercase;
  }

  span {
    background: ${({ theme }) => theme.colors.brand};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cta-button {
    button {
      margin: 20px auto 0 auto;
    }
  }
`;

const Hero: React.FC = () => {
  const handleButtonClick = () => {
    // console.log("CTA Button clicked!");
  };

  return (
    <StyledHero>
      <p className="uppercase">Explore the</p>
      <h1 className="titulo">
        <span>TECH</span>
        <br /> ZONE
      </h1>
      <p>
        Here you’ll be able to redeem all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </p>
      <div className="cta-button">
        <Button variant="landing-cta" onClick={handleButtonClick}>
          View all Products <Arrow />
        </Button>
      </div>
    </StyledHero>
  );
};

export default Hero;
