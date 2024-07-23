// "use client";

import React, { useState } from "react";

import styled from "styled-components";

// Actions
import { addPoints, getUser } from "@/app/actions";

// Components
import Button from "../Button/Button";
import Kite from "../../../public/icons/kite-icon";
import Kite2 from "../../../public/icons/aerocard-icon-kite";

// Icons
// import Arrow from "@/../public/icons/icon-close";

// URL del SVG
const svgUrl = "/icons/wave-pattern-card.svg";

const StyledAeroPayModule = styled.div`
  width: 312px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  // padding: 32px 0px;
  background: white;

  .titulo {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .aero-pay-card-container {
    border-top: 1px solid grey;
    padding: 32px 45px;
    padding: 20px;

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

const AeroPayModule = (props: {
  name: any;
  setPoints: any;
  points: number;
  onClose: () => void;
}) => {
  const [amount, setAmount] = useState(0);

  const { name, setPoints, points } = props;

  const handleClick = async (amount: number) => {
    const total = points + amount;
    setPoints(total);
    await addPoints(amount);
  };

  // const handleClick = async (amount: number) => {
  //   setLoading(true);
  //   try {
  //     const user = await getUser();
  //     await addPoints(amount);
  //     setPoints(user.points + amount);
  //   } catch (error) {
  //     console.error("Failed to add points:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <StyledAeroPayModule>
      <div className="titulo">
        <p className="black">Pay Balance</p>
        {/* <Arrow /> */}
      </div>
      <div className="aero-pay-card-container">
        <div className="aero-pay-card">
          <div className="brand">
            <p className="white">Aerocard</p>
            <Kite2 />
          </div>
          <div className="brand">
            <p className="white">{name}</p>
            <p className="white">07/23</p>
          </div>
        </div>
        <div className="add-section">
          <Button
            variant={
              amount === 1000 ? "number-selector-active" : "number-selector"
            }
            onClick={() => setAmount(1000)}>
            1000
          </Button>
          <Button
            variant={
              amount === 5000 ? "number-selector-active" : "number-selector"
            }
            onClick={() => setAmount(5000)}>
            5000
          </Button>
          <Button
            variant={
              amount === 7500 ? "number-selector-active" : "number-selector"
            }
            onClick={() => setAmount(7500)}>
            7500
          </Button>
        </div>
        <div className="send">
          <Button onClick={() => handleClick(amount)} variant="sort-selector">
            <Kite />
            Add Points
          </Button>
        </div>
      </div>
    </StyledAeroPayModule>
  );
};

export default AeroPayModule;
