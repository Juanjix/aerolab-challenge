import styled from "styled-components";
import WalkthroughCard from "../WalkthroughCard/index";
import Image from "next/image";

// Imágenes
import Step1 from "@/../public/images/Saly-1.png";
import Step2 from "@/../public/images/Saly-2.png";
import Step3 from "@/../public/images/Saly-3.png";

// Ilustracion
import Illustration from "@/../public/images/hero-desktop.png";

const StyledWalkthrough = styled.section`
  background: ${({ theme }) => theme.colors.brand};
  padding: 300px 0 120px 0;
  position: relative;
  z-index: 9999;

  @media (min-width: 920px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .illustration-container {
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 580px; /* Tamaño fijo de 580px */
    height: auto;
    overflow: hidden; /* Oculta cualquier desbordamiento */
    display: block;

    /* Oculta en dispositivos de escritorio */
    @media (min-width: 920px) {
      display: none;
    }
  }

  .illustration {
    width: 580px;
    height: auto; /* Mantiene la proporción */
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
      <div className="illustration-container">
        <Image
          src={Illustration}
          alt={""}
          layout="responsive"
          width={780}
          className="illustration"
        />
      </div>

      {WalkthrougData.map((data, key) => (
        <div key={key}>
          <WalkthroughCard
            WalkthroughProps={{
              imagen: data.imagen,
              titulo: data.titulo,
              sentence: data.sentence,
            }}
          />
        </div>
      ))}
    </StyledWalkthrough>
  );
};

export default WalkthroughSection;
