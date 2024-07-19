import styled from "styled-components";
import Image from "next/image";
import Icon from "../../../public/icons/icon-titulo";
import { StaticImageData } from "next/image";

const StyledWalkCard = styled.div`
  max-width: 532px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  margin: 0 auto;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.neutral__100};

  .inside-card {
    border: 1px solid ${({ theme }) => theme.colors.neutral__300};
    border-radius: 18px;
    background-color: white;

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-top: 75%;
      position: relative;
      background: ${({ theme }) => theme.colors.brand};
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
    }

    .image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 18px;
    }

    .text-section {
      padding: 20px;
      border-radius: 18px;

      .icon-titulo {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        background: ${({ theme }) => theme.colors.brand};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

interface WalkthroughProps {
  imagen: StaticImageData;
  titulo: string;
  sentence: string;
}

const WalkthroughCard = (props: { WalkthroughProps: WalkthroughProps }) => {
  return (
    <StyledWalkCard>
      <div className="inside-card">
        <div className="image-container">
          <Image
            src={props.WalkthroughProps.imagen}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-section">
          <h3 className="icon-titulo">
            <Icon />
            {props.WalkthroughProps.titulo}
          </h3>
          <p>{props.WalkthroughProps.sentence}</p>
        </div>
      </div>
    </StyledWalkCard>
  );
};

export default WalkthroughCard;
