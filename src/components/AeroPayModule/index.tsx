import styled from "styled-components";

// Icons

// Components
import Button from "../Button/Button";
import Kite from "../../../public/icons/kite-icon";

// URL del SVG
const svgUrl = "/icons/wave-pattern-card.svg";

const StyledAeroPayModule = styled.div`
  max-width: 312px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  padding: 32px 0px;
  background: white;

  .titulo {
    display: flex;
    justify-content: space-between;

    margin-bottom: 30px;
    padding: 20px;
  }

  .aero-pay-card-container {
    border-top: 1px solid grey;
    padding: 32px 20px;

    .aero-pay-card {
      background: repeat center url(${svgUrl});
      max-width: 264px;
      background-color: ${({ theme }) => theme.colors.neutral__900};
      border-radius: 18px;
      background-color: ${({ theme }) => theme.colors.neutral__900};
      padding: 20px;

      .brand {
        display: flex;
        justify-content: space-between;

        &:first-of-type {
          margin-bottom: 80px;
        }
      }
    }
  }

  .add-section {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;

const AeroPayModule = () => {
  return (
    <StyledAeroPayModule>
      <div className="titulo">
        <p>Pay Balance</p>
        <button onClick={() => console.log("Close button clicked")}>×</button>
      </div>
      <div className="aero-pay-card-container">
        <div className="aero-pay-card">
          <div className="brand">
            <p>Aerocard</p>
            <Kite />
          </div>
          <div className="brand">
            <p>John Kite</p>
            <p>07/23</p>
          </div>
        </div>
        <div className="add-section">
          <Button
            variant="number-selector"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>
            1000
          </Button>
          <Button
            variant="number-selector"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>
            5000
          </Button>
          <Button
            variant="number-selector"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>
            7500
          </Button>
        </div>
        <div className="send">
          <Button
            variant="cta"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>
            Add Points
          </Button>
        </div>
      </div>
    </StyledAeroPayModule>
  );
};

export default AeroPayModule;
