// Styled
import styled from "styled-components";

// Icons
import Github from "../../../public/icons/github-logo";

const StyledFooter = styled.footer`
  padding: 60px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 12px;
    }
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
