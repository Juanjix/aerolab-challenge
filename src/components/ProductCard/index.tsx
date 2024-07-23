// Components
import Image from "next/image";
import styled from "styled-components";
import Lazy from "../../../public/images/lazy.png";
import Button from "../Button/Button";

import Kite from "@/../public/icons/kite-icon";
import { Product } from "@/types";
import { theme } from "@/app/styles/themes";
import { getUser, reedemProduct } from "@/app/actions";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { boolean } from "drizzle-orm/mysql-core";

// Componentes

import NotificationToast from "../NotificationToast";

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
  points: number;
  setPoints: (points: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  points,
  setPoints,
}) => {
  const [loading, setLoading] = useState(false);

  // const handleClick = async (productId: string) => {
  //   setLoading(true);
  //   const user = await getUser();
  //   if (points >= product.cost) {
  //     setLoading(false);
  //     await reedemProduct(productId);
  //     setPoints(user.points - product.cost);
  //   }

  //   return;
  // };
  const handleClick = async (productId: string) => {
    setLoading(true);
    try {
      const user = await getUser();
      if (points >= product.cost) {
        await reedemProduct(productId);
        setPoints(user.points - product.cost);
      } else {
        console.log("Not enough points to redeem the product");
      }
    } catch (error) {
      console.error("Failed to redeem product:", error);
    } finally {
      setLoading(false);
    }
  };

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
        {/* {success === true ? (
          <NotificationToast type={"success"} message={"awdawda"} />
        ) : (
          <NotificationToast
            type={"error"}
            message={"There was a problem white the transaccion"}
          />
        )} */}

        {loading ? (
          <Button
            variant="cta-processing"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>
            Proccessing ...{" "}
          </Button>
        ) : (
          <Button variant="cta" onClick={() => handleClick(product._id)}>
            Reedem for <Kite /> {product.cost}
          </Button>
        )}
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
