// Style
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

// Icons
import { AerolabIconMobile } from "../../../public/icons/aerolabIconMobile";
import { AerolabLogo } from "../../../public/icons/aerolab-logo";
import Kite from "../../../public/icons/kite-icon";
import ArrowPay from "../../../public/icons/arrow-pay";
import Button from "../Button/Button";

// Module
import AeroPayModule from "../AeroPayModule";

const StyledMenu = styled.menu`
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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

  span {
    display: flex;
    align-items: center;
    margin-right: 12px;
    svg {
      margin-right: 5px;
    }
  }

  .aero-pay-container {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;
  }
`;

const Menu: React.FC = () => {
  const [showAeroPay, setShowAeroPay] = useState<boolean>(false);
  const aeroPayRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      aeroPayRef.current &&
      !aeroPayRef.current.contains(event.target as Node)
    ) {
      setShowAeroPay(false);
    }
  };

  useEffect(() => {
    if (showAeroPay) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAeroPay]);

  return (
    <StyledMenu>
      <div className="mobile">
        <AerolabIconMobile />
      </div>
      <div className="desktop">
        <AerolabLogo />
      </div>
      <div ref={aeroPayRef}>
        <Button
          variant="aero-pay-dropdown"
          onClick={() => setShowAeroPay(!showAeroPay)}>
          <span>
            <Kite /> 1000{" "}
          </span>
          <ArrowPay />
        </Button>
        {showAeroPay && (
          <div className="aero-pay-container">
            <AeroPayModule />
          </div>
        )}
      </div>
    </StyledMenu>
  );
};

export default Menu;
