import React from "react";
import styled from "styled-components";
import SkeletonBox from "../SkeletonBox"; // Asegúrate de que este componente esté disponible
import SkeletonText from "../SkeletonText"; // Asegúrate de que este componente esté disponible

const StyledSkeletonProductCard = styled.div`
  margin-bottom: 40px;
  .skeleton-card {
    border: 1px solid ${({ theme }) => theme.colors.neutral__300};
    border-radius: 18px;
    max-width: 335px;
    margin-bottom: 12px;
    overflow: hidden; /* Asegúrate de que el contenido no se desborde */
  }

  .image-container {
    padding: 40px 0;
    display: flex;
    justify-content: center;
  }

  .description-container {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral__300};
    padding: 20px 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .description-title {
    width: 60%;
  }

  .description-subtitle {
    width: 40%;
  }
`;

const SkeletonProductCard: React.FC = () => {
  return (
    <StyledSkeletonProductCard>
      <div className="skeleton-card">
        <div className="image-container">
          <SkeletonBox width="280px" height="204px" />
        </div>
        <div className="description-container">
          <SkeletonText width="60%" height="20px" />
          <SkeletonText width="40%" height="16px" />
        </div>
      </div>
    </StyledSkeletonProductCard>
  );
};

export default SkeletonProductCard;
