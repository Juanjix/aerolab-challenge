import styled from "styled-components";

interface SkeletonTextProps {
  width?: string;
  height?: string;
}

const SkeletonText = styled.div<SkeletonTextProps>`
  background: ${({ theme }) => theme.colors.neutral__200};
  border-radius: 4px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
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

export default SkeletonText;
