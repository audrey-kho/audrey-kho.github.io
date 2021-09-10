import { ReactComponent as LinkArrow } from "./assets/arrow-up-right.svg";
import { Mail, LogoLinkedin, LogoGithub } from "react-ionicons";
import About from "./components/About";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <NavStyles>
        <h3>AUDREY KHO</h3>
        <div className="external">
          <a
            href="https://drive.google.com/file/d/1K4P0W8m9sU6cNN-XS0x6gC4wB7RACUpC/view"
            target="_blank"
            rel="noreferrer"
          >
            RESUME <LinkArrow />
          </a>
          <a href="mailto:audreyckho@gmail.com" target="_blank" rel="noreferrer">
            <Mail color="#d8dbdb" width="26px" height="24px"/>
          </a>
          <a href="https://www.linkedin.com/in/audrey-kho/" target="_blank" rel="noreferrer">
            <LogoLinkedin color="#d8dbdb" height="24px"/>
          </a>
          <a href="https://github.com/audrey-kho" target="_blank" rel="noreferrer">
            <LogoGithub color="#d8dbdb"  width="24px" height="24px"/>
          </a>
        </div>
      </NavStyles>
      <About/>
      <FooterStyles>
        <h5>&copy; AUDREY KHO 2021</h5>
      </FooterStyles>
    </>
  );
}

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  max-width: 1380px;
  margin: 0 auto;

  h3 {
    font-weight: 400;
    letter-spacing: 2px;
  }

  a {
    font-size: 14px;
    display: flex;
    align-items: flex-start;
  }

  .external {
    display: flex;
    align-items: center;

    > * + * {
      margin-left: 22px;
    }
  }
`;

const FooterStyles = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 0 24px;

  h5 {
    letter-spacing: 2px;
    font-weight: 500;
  }
`;
