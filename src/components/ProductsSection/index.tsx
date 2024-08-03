import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
  StyledProductSection,
  FilterContainer,
  Pagination,
  PaginationMobile,
} from "../ProductSectionStyles";
import Arrow from "../../../public/icons/arrow-pay";
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
  >("mostRecent");
  const productsPerPage = 8;

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilter = (category: string) => {
    setFilteredData(
      category === "All Categories"
        ? data
        : data.filter((product) => product.category === category)
    );
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

  return (
    <StyledProductSection id="products-section">
      <Container>
        <h2 className="uppercase">
          <span className="gradiant-titulo">tech</span> products
        </h2>

        {/* START FILTER */}
        <FilterContainer>
          <div className="filter">
            <div className="dropdown">
              <div className="filter-by">
                <p>Filter by:</p>
                <Button
                  variant={
                    isDropdownOpen
                      ? "dropdown-products-active"
                      : "dropdown-products"
                  }
                  onClick={handleDropdownClick}>
                  <p>All Products</p>
                  <span className="icons-small">
                    <Arrow />
                  </span>
                </Button>
              </div>

              <div
                className={`dropdown-categories ${
                  isDropdownOpen ? "show" : ""
                }`}>
                <div onClick={() => handleFilter("All Categories")}>
                  <p>All Products</p>
                </div>
                {Array.from(
                  new Set(data.map((product) => product.category))
                ).map((category, index) => (
                  <div key={index} onClick={() => handleFilter(category)}>
                    <p>{category}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="separador" />

            <div className="filter-buttons">
              <p>Sort by:</p>
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
                <span className="gradient-text">Lowest Price</span>
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
          {/* Pagination */}
          <Pagination>
            <button type="button" className="arrow left" onClick={prevPage}>
              <Arrow />
            </button>
            <p>Page</p>
            <span>
              <p>
                {""}
                {currentPage} of{" "}
                {Math.ceil(filteredData.length / productsPerPage)}
              </p>
            </span>
            <button type="button" className="arrow right" onClick={nextPage}>
              <Arrow />
            </button>
          </Pagination>
        </FilterContainer>
        {/* END FILTER */}

        <div className="products-container">
          {loading
            ? Array(productsPerPage)
                .fill(0)
                .map((_, index) => <ProductCardSkeleton key={index} />)
            : currentProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  points={points}
                  setPoints={setPoints}
                />
              ))}{" "}
        </div>
        <PaginationMobile>
          <button className="arrow left" onClick={prevPage}>
            <Arrow />
          </button>
          <p>Page</p>
          <span>
            <p>
              {""}
              {currentPage} of{" "}
              {Math.ceil(filteredData.length / productsPerPage)}
            </p>
          </span>
          <button className="arrow right" onClick={nextPage}>
            <Arrow />
          </button>
        </PaginationMobile>
      </Container>
    </StyledProductSection>
  );
};

export default ProductSection;
