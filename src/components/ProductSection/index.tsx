import React, { useState } from "react";
import styled from "styled-components";

// Icons
import Arrow from "../../../public/icons/arrow-pay";

// Components
import ProductCard from "../ProductCard";
import { Product } from "@/types";
import Container from "../Container";
import Button from "../Button/Button";
import ProductCardSkeleton from "../ProductCardSkeleton";

interface ProductSectionProps {
  data: Product[];
  loading: boolean;
}

// Styled
const StyledProductSection = styled.section`
  .gradiant-titulo {
    color: #1667d9;
  }

  .filter-section {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .dropdown {
      button {
        border: 1px solid ${({ theme }) => theme.colors.neutral__300};
        border-radius: 18px;
        padding: 12px 16px;
        cursor: pointer;
        background-color: white;
        transition: background-color 0.3s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.neutral__200};
        }
      }

      .dropdown-products {
        display: none;
        position: absolute;
        max-width: 256px;
        background-color: ${({ theme }) => theme.colors.neutral__100};
        border: 1px solid ${({ theme }) => theme.colors.neutral__300};
        border-radius: 18px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
        width: 100%;
        max-height: 200px;
        overflow-y: auto;
        margin-top: 8px;

        &.show {
          display: block;
        }

        div {
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.neutral__200};
          }
        }
      }
    }

    .pagination {
      border: 1px solid ${({ theme }) => theme.colors.neutral__300};
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      .arrow {
        cursor: pointer;
        svg {
          padding: 10px;
          background: ${({ theme }) => theme.colors.brandLight};
          border-radius: 5px;

          &:hover {
            background: ${({ theme }) => theme.colors.brandLight2};
          }
        }

        .left {
          svg {
            transform: rotate(-90deg);
          }
        }

        .right {
          svg {
            transform: rotate(90deg);
          }
        }
      }

      span {
        background: ${({ theme }) => theme.colors.brand};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .filter-buttons {
      display: flex;
    }
  }

  .products-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 70px;

    @media (min-width: 620px) {
      justify-content: space-between;
    }
  }
`;

const ProductSection: React.FC<ProductSectionProps> = ({ data, loading }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledProductSection>
      <Container>
        <h2 className="uppercase">
          <span className="gradiant-titulo">tech</span> products
        </h2>

        <div className="filter-section">
          <div>
            <div className="dropdown">
              <p>Filter by:</p>
              <button onClick={handleDropdownClick}>
                All Products <Arrow />
              </button>
              <div
                className={`dropdown-products ${isDropdownOpen ? "show" : ""}`}>
                {data.map((product, index) => (
                  <div key={index}>{product.category}</div>
                ))}
              </div>
            </div>
            <div className="filter-buttons">
              <Button
                variant="sort-selector"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}>
                Most Recent
              </Button>
              <Button
                variant="sort-selector"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}>
                Lower Price
              </Button>
              <Button
                variant="sort-selector"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}>
                Highest Price
              </Button>
            </div>
          </div>

          <div className="pagination">
            <div className="arrow">
              <div className="left">
                <Arrow />
              </div>
            </div>{" "}
            Page <span>1 of 2</span>
            <div className="arrow">
              <div className="right">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div className="products-container">
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : data.map((product, key) => (
                <ProductCard key={key} product={product} />
              ))}
        </div>
      </Container>
    </StyledProductSection>
  );
};

export default ProductSection;
