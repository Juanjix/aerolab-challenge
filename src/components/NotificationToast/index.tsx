import React from "react";
import styled, { css } from "styled-components";
import IconSuccess from "../../../public/icons/icon-success";
import IconError from "../../../public/icons/icon-error";
import { theme } from "../../app/styles/themes/index";

// Props del componente
interface NotificationToastProps {
  type: "success" | "error";
  message: string;
}

// Estilos del componente
const StyledToast = styled.div<{ type: "success" | "error" }>`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  max-width: 532px;
  background: white;
  border: 2px solid
    ${({ type }) =>
      type === "success" ? theme.colors.green : theme.colors.red};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  // position: absolute;
  // bottom: 20px;
  // left: 20px;/
  // z-index: 1000; // Ensure it appears above other content

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }

  svg {
    margin-right: 8px;
  }

  p {
    display: flex;
    align-items: start;
  }
`;

const NotificationToast: React.FC<NotificationToastProps> = ({
  type,
  message,
}) => {
  return (
    <StyledToast type={type}>
      <p>
        {type === "success" ? <IconSuccess /> : <IconError />}
        {message}
      </p>
    </StyledToast>
  );
};

export default NotificationToast;
