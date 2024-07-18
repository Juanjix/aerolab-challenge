// Style
import styled from "styled-components";

// Icons
import { AerolabIconMobile } from "../../../../public/icons/aerolabIconMobile";
import { AerolabLogo } from "../../../../public/icons/aerolab-logo";
import Kite from "../../../../public/icons/kite-icon";
import ArrowPay from "../../../../public/icons/arrow-pay";
import Button from "../Button/Button";

const StyledMenu = styled.menu`
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 768px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`;

const Menu = () => {
  return (
    <StyledMenu>
      <div className="mobile">
        <AerolabIconMobile />
      </div>
      <div className="desktop">
        <AerolabLogo />
      </div>
      <div>
        <Button
          variant="aero-pay"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}>
          <Kite /> 1000 <ArrowPay />
        </Button>
      </div>
    </StyledMenu>
  );
};

export default Menu;
