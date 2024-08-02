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

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column-reverse; /* Las notificaciones recientes aparecerán arriba */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }
`;

interface Notification {
  type: "success" | "error";
  message: string;
}

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
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification]);
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1));
    }, 5000); // Oculta el toast después de 5 segundos
  };

  const handleClick = async (productId: string) => {
    setLoading(true);
    try {
      const user = await getUser();
      if (points >= product.cost) {
        await reedemProduct(productId);
        setPoints(user.points - product.cost);
        addNotification({
          type: "success",
          message: `Successfully redeemed ${product.name}!`,
        });
      } else {
        addNotification({
          type: "error",
          message: "Not enough points to redeem the product",
        });
      }
    } catch (error) {
      addNotification({
        type: "error",
        message: "Failed to redeem product. Please try again.",
      });
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
        <NotificationContainer>
          {notifications.map((notification, index) => (
            <NotificationToast
              key={index}
              type={notification.type}
              message={notification.message}
            />
          ))}
        </NotificationContainer>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
