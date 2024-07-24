import styled from "styled-components";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Definición de los estilos
const StyledWalkCard = styled.div`
  max-width: 320px;
  width: 100%;
  height: auto;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  margin: 0 auto;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.neutral__100};
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 1320px) {
    max-width: 410px;
    width: 100%;
  }

  @media (min-width: 1920px) {
    max-width: 532px;
  }

  .inside-card {
    border: 1px solid ${({ theme }) => theme.colors.neutral__300};
    border-radius: 16px;
    background-color: white;
    overflow: hidden;

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-top: 75%;
      position: relative;
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
      background: ${({ theme }) => theme.colors.brand};
    }

    .image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
    }

    .text-container {
      padding: 20px;
      border-radius: 16px;

      .step-text {
        display: flex;
        .icon {
          margin-right: 8px;
        }
        .step {
          display: flex;
          align-items: center;
          background: ${({ theme }) => theme.colors.brand};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;

interface WalkthroughProps {
  imagen: StaticImageData;
  titulo: string;
  sentence: string;
  icon: StaticImageData;
}

const WalkthroughCard: React.FC<{ WalkthroughProps: WalkthroughProps }> = ({
  WalkthroughProps,
}) => {
  const { imagen, titulo, sentence, icon: Icon } = WalkthroughProps;

  return (
    <StyledWalkCard>
      <div className="inside-card">
        <div className="image-container">
          <Image
            src={imagen}
            alt=""
            style={{
              objectFit: "cover",
            }}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="text-container">
          <div className="step-text">
            <Image src={Icon} alt={""} className="icon" />
            <h3 className="step">{titulo}</h3>
          </div>

          <p>{sentence}</p>
        </div>
      </div>
    </StyledWalkCard>
  );
};

export default WalkthroughCard;
