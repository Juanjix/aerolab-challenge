// Styled
import styled from "styled-components";

import Github from "../../../../public/icons/github-logo";

const StyledFooter = styled.footer`
  padding: 60px 0;

  a {
    display: flex;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="/">
        {" "}
        <Github />
        View this repository
      </a>
    </StyledFooter>
  );
};

export default Footer;
