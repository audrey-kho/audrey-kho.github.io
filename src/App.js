import { ReactComponent as LinkArrow } from "./assets/arrow-up-right.svg";
import { Mail, LogoLinkedin, LogoGithub } from "react-ionicons";
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
            <Mail color="#d8dbdb" />
          </a>
          <a href="https://www.linkedin.com/in/audrey-kho/" target="_blank" rel="noreferrer">
            <LogoLinkedin color="#d8dbdb" />
          </a>
          <a href="https://github.com/audrey-kho" target="_blank" rel="noreferrer">
            <LogoGithub color="#d8dbdb" />
          </a>
        </div>
      </NavStyles>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
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

  h3 {
    font-weight: 400;
    letter-spacing: 2px;
  }

  a {
    color: #d8dbdb;
    text-decoration: none;
    display: flex;
    align-items: flex-start;
  }

  .external {
    display: flex;

    > * + * {
      margin-left: 18px;
    }
  }
`;

const FooterStyles = styled.footer`
  position: absolute;
  bottom: 0;

  h5 {
    letter-spacing: 2px;
    font-weight: 500;
  }
`;
