import LinkArrow from "./assets/LinkArrow";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoMenuOutline,
} from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import { initializeApp } from "firebase/app";
import { Suspense } from "react";
import dayjs from "dayjs";

const About = React.lazy(() => import("./components/About"));
const Work = React.lazy(() => import("./components/Work"));
const Contact = React.lazy(() => import("./components/Contact"));

const firebaseConfig = {
  apiKey: "AIzaSyDe1AnnQzKoIb2kmpig5FYj60h6isSFK8c",
  authDomain: "audrey-kho.firebaseapp.com",
  databaseURL: "https://audrey-kho-default-rtdb.firebaseio.com",
  projectId: "audrey-kho",
  storageBucket: "audrey-kho.appspot.com",
  messagingSenderId: "306777134790",
  appId: "1:306777134790:web:024444a1e5d426846369c7",
  measurementId: "G-1WMJFHDP7Q",
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
    <Suspense
      fallback={
        <div
          style={{ width: "100%", height: "80em", background: "#e9f3ea" }}
        ></div>
      }
    >
      <NavStyles>
        <h1>AUDREY KHO</h1>
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
              width={18}
              height={18}
              stroke={2}
              color="#889c80"
              position={-3.2}
            />
          </a>
          <a
            href="mailto:audreyckho@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
            aria-label="Email"
          >
            <IoMail color="#485A3D" size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/audrey-kho/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
            aria-label="LinkedIn external link"
          >
            <IoLogoLinkedin color="#485A3D" size={22} />
          </a>
          <a
            href="https://github.com/audrey-kho"
            target="_blank"
            rel="noreferrer"
            title="Github"
            aria-label="Github external link"
          >
            <IoLogoGithub color="#485A3D" size={22} />
          </a>
        </div>
        <button className="mobile-menu" ref={ref} aria-label="menu">
          <IoMenuOutline
            color="#485A3D"
            size={22}
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
              offset={-98}
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
          </div>
        </button>
      </NavStyles>
      <About />
      <Work />
      <Contact firebaseConfig={app} />
      <FooterStyles>
        <p>&copy; AUDREY KHO {dayjs().year()}</p>
        <p>
          Thanks to{" "}
          <a href="https://www.jtiutan.com/" target="_blank" rel="noreferrer">
            Jill
          </a>{" "}
          &amp;{" "}
          <a href="https://maxinekho.com/" target="_blank" rel="noreferrer">
            Max
          </a>{" "}
          for the design help!
        </p>
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
  margin: -10px auto;
  padding: 0 24px;
  max-width: 1380px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(2.5px);
  z-index: 999;

  h1 {
    font-family: "DM Mono", monospace;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 2px;
    margin: 24px 0;

    @media (max-width: 850px) {
      display: none;
    }
  }

  a {
    font-family: "DM Mono", monospace;
    font-size: 15px;
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
    font-family: "DM Sans", sans-serif;
    font-weight: 600;

    margin: 24px 0;

    > * + * {
      margin-left: 22px;
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

    &:hover,
    &:active,
    &:focus {
      box-shadow: inset 0 0 3px rgba(95, 112, 83, 0.5);
    }

    @media (max-width: 850px) {
      display: block;
    }
  }

  .mobile-dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: "DM Sans", sans-serif;
    letter-spacing: 1px;
    line-height: 2.6em;
    padding: 18px;
    position: absolute;
    top: 48px;
    right: 0;
    background: rgba(230, 242, 231, 0.85);
    border: solid rgba(0, 0, 0, 0.2) 0.5px;
    border-radius: 8px;
    animation: ${dropdown} 0.2s ease;

    a {
      margin: 8px 2px;
      padding: 2px 6px;
      font-size: 18px;
      letter-spacing: 1px;
      cursor: pointer !important;
    }

    hr {
      border: 0;
      display: block;
      width: 100%;
      background-color: #485a3d;
      opacity: 0.4;
      margin: 8px 0;
      height: 0.6px;
    }

    &.hidden {
      display: none;
    }
  }
`;

const FooterStyles = styled.footer`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  position: relative;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  max-width: 1380px;
  margin: 0 auto;

  a {
    position: relative;
    display: inline;
    padding: 0;
    background-image: linear-gradient(#889c80, #889c80);
    background-size: 1px 1px;
    background-repeat: repeat-x;
    background-position: 0 92%;
  }

  p:first-child {
    font-family: "DM Mono", monospace;
  }

  p + p {
    margin-left: 16px;
  }
`;
