// Libraries
import styled from "styled-components";

// Utils

const Container = styled.div`
  max-width: 1320px;
  // width: 100%;
  padding: 0 28px;
  margin: 0 auto;

  @media (max-width: 440px) {
    padding: 0 48px;
  }

  @media (max-width: 920px) {
    padding: 0;
  }
`;

export default Container;
