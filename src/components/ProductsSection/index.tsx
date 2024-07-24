import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
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
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
}

// Styled
const StyledProductSection = styled.section`
  .filter-container {
    // display: flex;
    // justify-content: space-between;
    margin-top: 40px;

    .filter {
      @media (min-width: 1024px) {
        // display: flex;
        // align-items: center;
      }

      .dropdown {
        margin-bottom: 24px;

        .dropdown-categories {
          display: none;
          position: absolute;
          max-width: 256px;
          background-color: ${({ theme }) => theme.colors.neutral__100};
          border: 1px solid ${({ theme }) => theme.colors.neutral__300};
          border-radius: 16px;
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

      .filter-buttons {
      }
    }

    .pagination {
      border: 1px solid ${({ theme }) => theme.colors.neutral__300};
      border-radius: 16px;
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
      justify-content: space-between;
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

const ProductSection: React.FC<ProductSectionProps> = ({
  data,
  loading,
  points,
  setPoints,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [sortCriteria, setSortCriteria] = useState<
    "mostRecent" | "lowerPrice" | "higherPrice" | null
  >(null);
  const productsPerPage = 8;

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilter = (category: string) => {
    if (category === "All Categories") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((product) => product.category === category));
    }
    setCurrentPage(1);
  };

  const handleSort = (
    criteria: "mostRecent" | "lowerPrice" | "higherPrice"
  ) => {
    setSortCriteria(criteria);
  };

  const sortedData = () => {
    switch (sortCriteria) {
      case "mostRecent":
        return [...filteredData].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "lowerPrice":
        return [...filteredData].sort((a, b) => a.cost - b.cost);
      case "higherPrice":
        return [...filteredData].sort((a, b) => b.cost - a.cost);
      default:
        return filteredData;
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedData().slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const GradientText = styled.span`
    background: linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  `;

  return (
    <StyledProductSection id="products-section">
      <Container>
        <h2 className="uppercase">
          <span className="gradiant-titulo">tech</span> products
        </h2>

        {/* START FILTER */}
        <div className="filter-container">
          <div className="filter">
            <div className="dropdown">
              <div className="filter-by">
                <Button
                  variant="dropdown-products"
                  onClick={handleDropdownClick}>
                  All Categories <Arrow />
                </Button>
              </div>

              <div
                className={`dropdown-categories ${
                  isDropdownOpen ? "show" : ""
                }`}>
                <div onClick={() => handleFilter("All Categories")}>
                  All Categories
                </div>
                {Array.from(
                  new Set(data.map((product) => product.category))
                ).map((category, index) => (
                  <div key={index} onClick={() => handleFilter(category)}>
                    {category}
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-buttons">
              <Button
                variant={
                  sortCriteria === "mostRecent"
                    ? "sort-selector-active"
                    : "sort-selector"
                }
                onClick={() => handleSort("mostRecent")}>
                <span className="gradient-text">Most Recent</span>
              </Button>
              <Button
                variant={
                  sortCriteria === "lowerPrice"
                    ? "sort-selector-active"
                    : "sort-selector"
                }
                onClick={() => handleSort("lowerPrice")}>
                <span className="gradient-text">Lower Price</span>
              </Button>
              <Button
                variant={
                  sortCriteria === "higherPrice"
                    ? "sort-selector-active"
                    : "sort-selector"
                }
                onClick={() => handleSort("higherPrice")}>
                <span className="gradient-text">Highest Price</span>
              </Button>
            </div>
          </div>

          <div className="pagination">
            <div className="arrow">
              <div className="left">
                <button onClick={prevPage}>
                  <Arrow />
                </button>
              </div>
            </div>{" "}
            Page{" "}
            <span>
              {currentPage} of{" "}
              {Math.ceil(filteredData.length / productsPerPage)}
            </span>
            <div className="arrow">
              <div className="right">
                <button onClick={nextPage}>
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="products-container">
          {loading
            ? Array.from({ length: productsPerPage }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : currentProducts.map((product, key) => (
                <ProductCard
                  key={key}
                  product={product}
                  points={points}
                  setPoints={setPoints}
                />
              ))}
        </div>
      </Container>
    </StyledProductSection>
  );
};

export default ProductSection;
