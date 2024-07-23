"use client";
// Style
import styled from "styled-components";

// Actions
import { getUser, addPoints } from "@/app/actions";
import { User } from "@/types";

// Icons
import { AerolabIconMobile } from "../../../public/icons/aerolabIconMobile";
import { AerolabLogo } from "../../../public/icons/aerolab-logo";
import Kite from "../../../public/icons/kite-icon";
import ArrowPay from "../../../public/icons/arrow-pay";
import Button from "../Button/Button";

// Module
import AeroPayModule from "../AeroPayModule";
import Container from "../Container";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Skeleton from "../SkeletonBox";

const StyledMenu = styled.menu`
  .menu-container {
    padding: 60px 0;
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
      margin-left: 20px;
    }

    .translate {
      span {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    svg {
      margin-right: 10px;
    }

    .aero-pay-container {
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 10;
    }
  }
`;

const Menu = (props: {
  points: number;
  user: User;
  setPoints: Dispatch<SetStateAction<number>>;
}) => {
  const { points, user, setPoints } = props;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleModal = () => {
    setShow(!show);
  };

  if (loading) {
    return (
      <StyledMenu>
        <Container>
          <div className="menu-container">
            <div className="mobile">
              <Skeleton width="50px" height="50px" />
            </div>
            <div className="desktop">
              <Skeleton width="120px" height="50px" />
            </div>
            <div>
              <Skeleton width="150px" height="40px" />
            </div>
          </div>
        </Container>
      </StyledMenu>
    );
  }

  return (
    <StyledMenu>
      <Container>
        <div className="menu-container">
          <div className="mobile">
            <AerolabIconMobile />
          </div>
          <div className="desktop">
            <AerolabLogo />
          </div>
          <div>
            <Button variant="aero-pay-dropdown" onClick={() => handleModal()}>
              <Kite /> {points}
              {!show ? (
                <div>
                  <span>
                    <ArrowPay />
                  </span>
                </div>
              ) : (
                <div className="translate">
                  <span>
                    <ArrowPay />
                  </span>
                </div>
              )}
            </Button>

            {show && (
              <div className="aero-pay-container">
                <AeroPayModule
                  name={user?.name}
                  setPoints={setPoints}
                  points={points || 0}
                  onClose={handleModal}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </StyledMenu>
  );
};

export default Menu;
