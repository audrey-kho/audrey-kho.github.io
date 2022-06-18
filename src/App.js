import LinkArrow from "./assets/LinkArrow";
import { Mail, LogoLinkedin, LogoGithub, MenuOutline } from "react-ionicons";
import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import { initializeApp } from 'firebase/app';
import { Suspense } from "react";

const About = React.lazy(() => import("./components/About"));
const Work = React.lazy(() => import("./components/Work"));
const Contact = React.lazy(() => import("./components/Contact"));

/*
Old colors:
- hyperlink purple: #8aa5ff
*/

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe1AnnQzKoIb2kmpig5FYj60h6isSFK8c",
  authDomain: "audrey-kho.firebaseapp.com",
  databaseURL: "https://audrey-kho-default-rtdb.firebaseio.com",
  projectId: "audrey-kho",
  storageBucket: "audrey-kho.appspot.com",
  messagingSenderId: "306777134790",
  appId: "1:306777134790:web:024444a1e5d426846369c7",
  measurementId: "G-1WMJFHDP7Q"
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
  }, [open]);

  return (
    <Suspense fallback={
      <div style={{width: "100%", height: "80em", background: "#cedad2"}}></div>
    }>
      <NavStyles>
        <h2>AUDREY KHO</h2>
        <div className="scroll-links">
          <Link to={"about"} smooth={true} offset={-132}>
            ABOUT
          </Link>
          <Link to={"work"} smooth={true} offset={-132}>
            WORK
          </Link>
          <Link to={"contact"} smooth={true} offset={-132}>
            CONTACT
          </Link>
        </div>
        <div className="main-menu">
          <a
            href="https://drive.google.com/file/d/1K4P0W8m9sU6cNN-XS0x6gC4wB7RACUpC/view"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
            <LinkArrow
              width={16}
              height={16}
              stroke={2}
              color="#889c80"
              position={-3.2}
            />
          </a>
          <a
            href="mailto:audreyckho@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail color="#485A3D" width="26px" height="24px" />
          </a>
          <a
            href="https://www.linkedin.com/in/audrey-kho/"
            target="_blank"
            rel="noreferrer"
          >
            <LogoLinkedin color="#485A3D" height="24px" />
          </a>
          <a
            href="https://github.com/audrey-kho"
            target="_blank"
            rel="noreferrer"
          >
            <LogoGithub color="#485A3D" width="24px" height="24px" />
          </a>
        </div>
        <button className="mobile-menu" ref={ref}>
          <MenuOutline
            color="#485A3D"
            width="28px"
            height="28px"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <div className={clsx({ "mobile-dropdown": true, hidden: !open })}>
            <Link
              to={"about"}
              smooth={true}
              offset={-132}
              onClick={() => {
                setOpen(false);
              }}
            >
              ABOUT
            </Link>
            <Link
              to={"work"}
              smooth={true}
              offset={-132}
              onClick={() => {
                setOpen(false);
              }}
            >
              WORK
            </Link>
            <Link
              to={"contact"}
              smooth={true}
              offset={-132}
              onClick={() => {
                setOpen(false);
              }}
            >
              CONTACT
            </Link>
            <hr />
            <a
              href="https://drive.google.com/file/d/1K4P0W8m9sU6cNN-XS0x6gC4wB7RACUpC/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setOpen(false);
              }}
            >
              RESUME
            </a>
            <a
              href="mailto:audreyckho@gmail.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setOpen(false);
              }}
            >
              E-MAIL
            </a>
            <a
              href="https://www.linkedin.com/in/audrey-kho/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setOpen(false);
              }}
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/audrey-kho"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setOpen(false);
              }}
            >
              GITHUB
            </a>
          </div>
        </button>
      </NavStyles>
      <About />
      <Work />
      <Contact firebaseConfig={app}/>
      <FooterStyles>
        <h5>&copy; AUDREY KHO 2022</h5>
        <h5>Huge thanks to <a href='https://www.jtiutan.com/' target='_blank' rel='noreferrer'>Jill</a> &amp; <a href='https://maxinekho.com/' target='_blank' rel='noreferrer'>Max</a> for the design help!</h5>
      </FooterStyles>
    </Suspense>
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
`;

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
  }

  .scroll-links {
    margin-left: 8.2vw;

    > * {
      margin: 0 18px;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

  .main-menu {
    display: flex;
    align-items: center;

    > * + * {
      margin-left: 22px;
    }

    @media (max-width: 850px) {
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
      line-height: 1.9em;
      position: absolute;
      top: 48px;
      right: 0;
      padding: 12px 18px;
      background: rgba(255, 255, 255, 0.2);
      border: solid rgba(0, 0, 0, 0.2) 0.5px;
      border-radius: 8px;
      animation: ${dropdown} 0.2s ease;

      a {
        margin: 4px 6px;
        padding: 2px;
        font-size: 1.2em;
        cursor: pointer !important;
      }

      hr {
        border: 0;
        display: block;
        width: 100%;
        background-color: #485A3D;
        opacity: 0.4;
        margin: 8px 0;
        height: 0.6px;
      }

      &.hidden {
        display: none;
      }
    }

    &:hover,
    &:active,
    &:focus {
      box-shadow: inset 0 0 3px rgba(95, 112, 83, 0.5);
    }

    @media (max-width: 850px) {
      display: block;
    }
  }
`;

const FooterStyles = styled.footer`
  font-family: "Whyte Light", sans-serif;
  font-weight: 100;
  position: relative;
  padding: 24px;
  display: flex;
  font-weight: 500;
  justify-content: space-between;

  a {
    position: relative;
    display: inline;
    padding: 0;
    background-image: linear-gradient(#889c80, #889c80);
    background-size: 1px 1px;
    background-repeat: repeat-x;
    background-position: 0 92%;
  }
`;
