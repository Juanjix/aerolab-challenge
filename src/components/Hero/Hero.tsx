import React, { useState, useEffect } from "react";

// Styled
import styled from "styled-components";

// Components
import Button from "../Button/Button";
import Container from "../Container";
import Image from "next/image";

// Image
import HeroIllus from "@/../public/images/illustration-desktop.png";

// Icons
import { Arrow } from "../../../public/icons/arrow";

// Skeletons

import SkeletonBox from "../SkeletonBox";
import SkeletonText from "../SkeletonText";
// import Icon from "../../../public/icons/icon-error";

// URL del SVG
const svgUrl = "/icons/background-wave.svg";

const StyledHero = styled.section`
  background: repeat center url(${svgUrl});
  height: 100vh;

  .hero-container {
    text-align: center;

    @media (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: start;
    }

    .text-container {
      margin: 0 auto;

      @media (min-width: 1280px) {
        width: 602px;
      }

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
        margin-top: 20px;
      }
    }

    .image-desktop-container {
      display: none;

      @media (min-width: 1280px) {
        display: block;
      }
    }

    .skeleton-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .skeleton-text-container {
        width: 100%;
        max-width: 602px;
        margin: 0 auto;

        @media (min-width: 1280px) {
          width: 602px;
        }
      }

      .skeleton-text {
        margin: 10px 0;
      }

      .skeleton-button {
        width: 100%;
        max-width: 303px;
        margin-top: 20px;
      }

      .skeleton-image {
        width: 100%;
        height: 0;
        padding-top: 56.25%; /* Aspect ratio 16:9 */
        display: none;

        @media (min-width: 1280px) {
          display: block;
          width: 629px;
          height: 10px;
          margin-top: 0;
        }
      }
    }
  }
`;

const Hero: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulando la carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const handleButtonClick = () => {};

  return (
    <StyledHero>
      <Container>
        <div className="hero-container">
          {loading ? (
            <div className="skeleton-container">
              <div className="skeleton-text-container">
                <SkeletonText
                  width="100px"
                  height="20px"
                  className="skeleton-text"
                />
                <SkeletonText
                  width="200px"
                  height="40px"
                  className="skeleton-text"
                  style={{ margin: "20px 0 30px 0" }}
                />
                <SkeletonText
                  width="100%"
                  height="20px"
                  className="skeleton-text"
                />
                <SkeletonBox
                  width="303px"
                  height="50px"
                  className="skeleton-button"
                />
              </div>
              <SkeletonBox
                className="skeleton-image"
                width="303px"
                height="50px"
              />
            </div>
          ) : (
            <>
              <div className="text-container">
                <p className="uppercase">Explore the</p>
                <h1 className="titulo">
                  <span>TECH</span>
                  <br /> ZONE
                </h1>
                <p>
                  Here you’ll be able to redeem all of your hard-earned
                  Aeropoints and exchange them for cool tech.
                </p>
                <div className="cta-button">
                  <Button variant="landing-cta" onClick={handleButtonClick}>
                    <a href="#products-section">
                      View all Products <Arrow />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="image-desktop-container">
                <Image
                  src={HeroIllus}
                  alt=""
                  style={{
                    width: "100%",
                    maxWidth: "629px",
                    height: "auto",
                  }}
                  priority
                />
              </div>
            </>
          )}
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
