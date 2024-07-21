// Theme

// Components
import Image from "next/image";
import styled from "styled-components";
import Lazy from "../../../public/images/lazy.png";
import Button from "../Button/Button";

// Types

import Kite from "@/../public/icons/kite-icon";
import { Product } from "@/types";
import { theme } from "@/app/styles/themes";

const StyledProductCard = styled.div`
  margin-bottom: 40px;
  .product-card {
    border: 1px solid ${theme.colors.neutral__300};
    border-radius: 18px;
    max-width: 335px;
    margin-bottom: 12px;

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

  button {
    width: 100%;
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
              {product.img ? (
                <Image
                  src={product.img.url}
                  width={280}
                  height={204}
                  alt=""
                  quality={100}
                  loading="lazy"
                  blurDataURL="../../public/images/lazy.png"
                />
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
          Reedem for <Kite /> {product.cost}
        </Button>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
