import styled from "styled-components";
import WalkthroughCard from "../WalkthroughCard/index";

// Imágenes
import Step1 from "@/../public/images/Saly-1.png";
import Step3 from "@/../public/images/Saly-2.png";
import Step2 from "@/../public/images/Saly-3.png";

// Icons
import Icon1 from "@/../public/icons/icon-1.svg";
import Icon2 from "@/../public/icons/icon-2.svg";
import Icon3 from "@/../public/icons/icon-3.svg";

// Container
import Container from "../Container";

const StyledWalkthrough = styled.section`
  background: ${({ theme }) => theme.colors.specialSection};
  padding: 300px 0 120px 0;
  position: relative;
  z-index: 9999;

  @media (min-width: 1024px) {
    padding: 150px 0 10px 0;
  }

  .aero-ilustracion {
    background: url("/images/hero-desktop.png") center center;
    background-size: cover;
    max-width: 460px;
    width: 100%;
    height: 518px;
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    right: 50%;

    @media (min-width: 1024px) {
      max-width: 580px;
      top: -350px;
    }

    @media (min-width: 1260px) {
      display: none;
    }

    .illustration {
      width: 580px;
      height: auto;
    }
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 9999;
    position: relative;

    @media (min-width: 920px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    @media (min-width: 1320px) {
      justify-content: center;
    }

    .card {
      @media (min-width: 1320px) {
        margin-top: -190px;
        &.step-1 {
          transform: rotate(-4deg);
        }

        &.step-2 {
          margin-top: -225px;
          margin-right: -65px;
          margin-left: -65px;
        }

        &.step-3 {
          transform: rotate(4deg);
        }
      }
    }
  }
`;

const WalkthrougData = [
  {
    titulo: "1—BROWSE",
    imagen: Step1,
    sentence: "Browse our tech catalog with more than 20 top tech products",
    className: "step-1",
    icon: Icon1,
  },
  {
    titulo: "2—CHOOSE",
    imagen: Step2,
    sentence: "Exchange your hard-earned AeroPoints for a cool tech item",
    className: "step-2",
    icon: Icon2,
  },
  {
    titulo: "3—ENJOY",
    imagen: Step3,
    sentence: "All done We’ll take care of delivery of your tech item!",
    className: "step-3",
    icon: Icon3,
  },
];

const WalkthroughSection = () => {
  return (
    <StyledWalkthrough>
      <div className="aero-ilustracion" />
      <Container>
        <div className="cards-container">
          {WalkthrougData.map((data, key) => (
            <div key={key} className={`card ${data.className}`}>
              <WalkthroughCard
                WalkthroughProps={{
                  imagen: data.imagen,
                  titulo: data.titulo,
                  sentence: data.sentence,
                  icon: data.icon,
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
