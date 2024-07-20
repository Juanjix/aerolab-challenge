import styled from "styled-components";
import WalkthroughCard from "../WalkthroughCard/index";

// Imágenes
import Step1 from "@/../public/images/Saly-1.png";
import Step2 from "@/../public/images/Saly-2.png";
import Step3 from "@/../public/images/Saly-3.png";

const StyledWalkthrough = styled.section`
  background: ${({ theme }) => theme.colors.brand};
  padding: 120px 0;

  @media (min-width: 920px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
