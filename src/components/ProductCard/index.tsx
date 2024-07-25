// Components
import Image from "next/image";
import styled from "styled-components";
import Lazy from "../../../public/images/lazy.png";
import Button from "../Button/Button";

import Kite from "@/../public/icons/kite-icon-products";
import KiteNotAllowed from "../../../public/icons/icon-kite-notallowed";

import { Product } from "@/types";
import { theme } from "@/app/styles/themes";
import { getUser, reedemProduct } from "@/app/actions";
import { useState } from "react";

// Componentes
import NotificationToast from "../NotificationToast";

const StyledProductCard = styled.div`
  margin-bottom: 40px;
  position: relative;

  .product-card {
    border: 1px solid ${theme.colors.neutral__300};
    border-radius: 16px;
    max-width: 335px;
    margin-bottom: 12px;
    &:hover {
      box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.colors.neutral__300};
    }

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

    svg {
      margin: 0px 10px;
    }
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

  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleClick = async (productId: string) => {
    setLoading(true);
    try {
      const user = await getUser();
      if (points >= product.cost) {
        await reedemProduct(productId);
        setPoints(user.points - product.cost);
        setNotification({
          type: "success",
          message: `Successfully redeemed ${product.name}!`,
        });
      } else {
        setNotification({
          type: "error",
          message: "Not enough points to redeem the product",
        });
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Failed to redeem product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
    setTimeout(() => setNotification({ type: null, message: "" }), 5000); // Oculta el toast después de 5 segundos
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
        {notification.type && (
          <NotificationToast
            type={notification.type}
            message={notification.message}
          />
        )}
        {points < product.cost ? (
          <Button variant="cta-disabled" onClick={function (): void {}}>
            You need{" "}
            <span className="icons-small">
              <KiteNotAllowed />{" "}
            </span>
            {product.cost}
          </Button>
        ) : loading ? (
          <Button
            variant="cta-processing"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>
            Proccessing ...{" "}
          </Button>
        ) : (
          <Button variant="cta" onClick={() => handleClick(product._id)}>
            Reedem for{" "}
            <span className="icons-small">
              <Kite />{" "}
            </span>
            {product.cost}
          </Button>
        )}
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
