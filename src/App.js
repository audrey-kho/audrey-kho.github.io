import LinkArrow from "./assets/LinkArrow";
import { Mail, LogoLinkedin, LogoGithub, MenuOutline } from "react-ionicons";
import About from "./components/About";
import styled, { keyframes } from "styled-components";
import Work from "./components/Work";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

  return (
    <>
      <NavStyles>
        <h2>AUDREY KHO</h2>
        <div className="main-menu">
          <a
            href="https://drive.google.com/file/d/1K4P0W8m9sU6cNN-XS0x6gC4wB7RACUpC/view"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
            <LinkArrow width={15} height={15} stroke={2} />
          </a>
          <a href="mailto:audreyckho@gmail.com" target="_blank" rel="noreferrer">
            <Mail color="#d8dbdb" width="26px" height="24px" />
          </a>
          <a href="https://www.linkedin.com/in/audrey-kho/" target="_blank" rel="noreferrer">
            <LogoLinkedin color="#d8dbdb" height="24px" />
          </a>
          <a href="https://github.com/audrey-kho" target="_blank" rel="noreferrer">
            <LogoGithub color="#d8dbdb" width="24px" height="24px" />
          </a>
        </div>
        <button className="mobile-menu" ref={ref}>
          <MenuOutline color="#d8dbdb" width="22px" height="22px" onClick={() => {setOpen(!open)}}/>

          <div className={clsx({"mobile-dropdown": true, "hidden": !open})}>
            <a
              href="https://drive.google.com/file/d/1K4P0W8m9sU6cNN-XS0x6gC4wB7RACUpC/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => {setOpen(false)}}
            >
              RESUME
            </a>
            <a href="mailto:audreyckho@gmail.com" target="_blank" rel="noreferrer" onClick={() => {setOpen(false)}}>
              E-MAIL
            </a>
            <a href="https://www.linkedin.com/in/audrey-kho/" target="_blank" rel="noreferrer" onClick={() => {setOpen(false)}}>
              LINKEDIN
            </a>
            <a href="https://github.com/audrey-kho" target="_blank" rel="noreferrer" onClick={() => {setOpen(false)}}>
              GITHUB
            </a>
          </div>
        </button>
      </NavStyles>
      <About />
      <Work />
      <FooterStyles>
        <h5>&copy; AUDREY KHO 2021</h5>
      </FooterStyles>
    </>
  );
}

const dropdown = keyframes`
  from {
    transform: translateY(-6px);
    opacity: 0.4;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 18px;
  max-width: 1380px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(2.5px);
  z-index: 999;

  h2 {
    font-size: 16px;
    margin: 24px 0;
  }

  a {
    font-size: 13px;
    display: flex;
    align-items: flex-start;
  }

  .main-menu {
    display: flex;
    align-items: center;

    > * + * {
      margin-left: 22px;
    }

    @media (max-width: 750px) {
      display: none;
    }
  }

  .mobile-menu {
    position: relative;
    display: none;
    background: none;
    border: none;
    padding: 0;
    border-radius: 3px;
    transition: 0.3s all;
    backdrop-filter: blur(10px) !important;


    svg {
      padding: 4px 8px 2px;
    }

    .mobile-dropdown {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-family: "Whyte", sans-serif;
      letter-spacing: 1px;
      position: absolute;
      top: 50px;
      right: 0;
      padding: 6px 16px;
      background: rgba(22, 38, 66, 0.75);
      box-shadow: 0 0 2px rgba(102, 118, 146, 0.8);
      border-radius: 6px;
      animation: ${dropdown} 0.2s ease;

      a {
        margin: 4px 0;
        padding: 2px;
        cursor: pointer !important;
      }

      &.hidden {
        display: none;
      }
    }

    &:hover, &:active, &:focus {
      box-shadow: 0 0 2px rgba(180, 180, 220, 0.8);
    }

    @media (max-width: 750px) {
      display: block;
    }
  }
`;

const FooterStyles = styled.footer`
  position: relative;
  padding: 24px;
  display: flex;
  font-weight: 500;
`;