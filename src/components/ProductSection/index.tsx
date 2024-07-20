import styled from "styled-components";

// Components
import ProductCard from "../ProductCard";
import { Product } from "@/types";
import Container from "../Container";

interface ProductSectionProps {
  data: Product[];
}

// Styled
const StyledProductSection = styled.section`
  .products-container {
    display: flex;
    justify-content: center;

    gap: 40px;
    flex-wrap: wrap;
  }
`;

const ProductSection: React.FC<ProductSectionProps> = ({ data }) => {
  return (
    <StyledProductSection>
      <Container>
        <h2>tech products</h2>
        <div className="products-container">
          {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </StyledProductSection>
  );
};

export default ProductSection;
