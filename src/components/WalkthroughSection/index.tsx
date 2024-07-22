import styled from "styled-components";
import WalkthroughCard from "../WalkthroughCard/index";
import Image from "next/image";

// Imágenes
import Step1 from "@/../public/images/Saly-1.png";
import Step2 from "@/../public/images/Saly-2.png";
import Step3 from "@/../public/images/Saly-3.png";

// Icons

// Ilustracion
import Illustration from "@/../public/images/hero-desktop.png";

// Container
import Container from "../Container";

const StyledWalkthrough = styled.section`
  background: ${({ theme }) => theme.colors.brand};
  padding: 300px 0 120px 0;
  position: relative;
  z-index: 9999;

  @media (min-width: 1024px) {
    padding: 0px 0 10px 0;
  }

  @media (min-width: 1290px) {
    padding: 150px 0 -190px 0;
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;

    @media (min-width: 920px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    .card {
      margin-top: -90px;
    }

    .illustration-container {
      position: absolute;
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
      right: 50%;
      width: 100%;
      overflow: hidden;
      max-width: 460px;
      width: 100%;
      display: block;

      @media (min-width: 1024px) {
        max-width: 580px;
        top: -350px;
      }

      @media (min-width: 1260px) {
        display: none;
      }

      .illustration {
        width: 580px;
        height: auto; /* Mantiene la proporción */
      }
    }
  }
`;

const WalkthrougData = [
  {
    titulo: "1--BROWSE",
    imagen: Step1,
    sentence: "Browse our tech catalog with more than 20 top tech products",
  },
  {
    titulo: "2--CHOOSE",
    imagen: Step2,
    sentence: "Exchange your hard-earned AeroPoints for a cool tech item",
  },
  {
    titulo: "3--ENJOY",
    imagen: Step3,
    sentence: "All done We’ll take care of delivery of your tech item!",
  },
];

const WalkthroughSection = () => {
  return (
    <StyledWalkthrough>
      <Container>
        <div className="cards-container">
          <div className="illustration-container">
            <Image
              src={Illustration}
              alt={""}
              style={{
                width: "100%",
                height: "100%",
              }}
              priority
              className="illustration"
            />
          </div>
          {WalkthrougData.map((data, key) => (
            <div key={key} className="card">
              <WalkthroughCard
                WalkthroughProps={{
                  imagen: data.imagen,
                  titulo: data.titulo,
                  sentence: data.sentence,
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </StyledWalkthrough>
  );
};

export default WalkthroughSection;
