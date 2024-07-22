// Libraries
import styled from "styled-components";

// Utils

const Container = styled.div`
  max-width: 1320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 440px) {
    padding: 0 48px;
  }

  @media (min-width: 1320px) {
    padding: 0;
  }
`;

export default Container;
