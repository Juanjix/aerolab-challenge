import { theme } from "@/app/styles/themes";
import Image from "next/image";
import styled from "styled-components";
import Lazy from "../../../public/images/lazy.png";
import Button from "../Button/Button";

// Types
import { Product } from "@/types";

const StyledProductCard = styled.div`
  .product-card {
    border: 1px solid ${theme.colors.neutral__300};
    border-radius: 18px;
    max-width: 335px;

    .product-description {
      border-top: 1px solid ${theme.colors.neutral__300};
      padding: 20px 12px;

      .name {
        color: black;
      }

      .type {
        text-transform: uppercase;
      }
    }

    .image-container {
      padding: 40px 0;
    }
  }
`;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledProductCard>
      <div>
        <div className="product-card">
          <div>
            <div className="image-container">
              {product.imgUrl ? (
                <Image src={product.imgHdUrl} width={280} height={204} alt="" />
              ) : (
                <Image src={Lazy} width={280} height={204} alt="" />
              )}
            </div>

            <div className="product-description">
              <p className="name">{product.name}</p>
              <p className="small type">{product.category}</p>
            </div>
          </div>
        </div>
        <Button
          variant="cta"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}>
          Reedem for {product.cost}
        </Button>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
