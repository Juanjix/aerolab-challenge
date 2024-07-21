import React from "react";

// Styled
import styled from "styled-components";

// Components
import Button from "../Button/Button";
import Container from "../Container";

// Icons
import { Arrow } from "../../../public/icons/arrow";

// URL del SVG
const svgUrl = "/icons/background-wave.svg";

const StyledHero = styled.section`
  text-align: center;
  background: repeat center url(${svgUrl});

  .text-container {
    width: 303px;
    margin: 0 auto;

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

    button {
      max-width: 303px;
    }
  }
`;

const Hero: React.FC = () => {
  const handleButtonClick = () => {};

  return (
    <StyledHero>
      <Container>
        <div className="text-container">
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
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
