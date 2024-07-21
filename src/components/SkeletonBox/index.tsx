// components/SkeletonBox.tsx
import styled from "styled-components";

interface SkeletonBoxProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const SkeletonBox = styled.div<SkeletonBoxProps>`
  background: ${({ theme }) => theme.colors.neutral__200};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: ${({ theme }) => theme.colors.neutral__300};
    }
    50% {
      background-color: ${({ theme }) => theme.colors.neutral__200};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.neutral__300};
    }
  }
`;

export default SkeletonBox;
