import React from "react";
import styled from "styled-components";
import { CodeSlashOutline, HeartOutline, SchoolOutline } from "react-ionicons";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiJava,
  SiMiro,
  SiReact,
  SiStyledcomponents,
  SiSvelte,
} from "react-icons/si";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT</SectionTitle>
        <MainSection>
          <h1>
            <span>Hey, I'm</span> Audrey
          </h1>
          <div className="headshot"></div>
          <ul className="details__list">
            <li>
              <CodeSlashOutline color="#485A3D" width="20px" height="20px" />
              <p>
                I'm a Seattle-based software developer passionate about creating
                rich, memorable experiences on the web.
              </p>
            </li>
            <li>
              <SchoolOutline color="#485A3D" width="20px" height="20px" />
              <p>
                I'm an{" "}
                <a
                  href="https://ischool.uw.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Informatics
                </a>{" "}
                major studying software development, HCI, and cybersecurity at
                the{" "}
                <a
                  href="https://www.washington.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of Washington
                </a>
                .
              </p>
            </li>
            <li>
              <HeartOutline color="#485A3D" width="20px" height="20px" />
              <p>
                I'm always craving for coconut water &amp;{" "}
                <a
                  href="https://vanleeuwenicecream.com/product/vanilla-bean-ice-cream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vanilla-flavored
                </a>{" "}
                desserts. I also love to cook and bake in my free time!
              </p>
            </li>
          </ul>
          <SectionHeading>RECENT WORKED WITH</SectionHeading>
          <ul className="skills__list">
            <li>
              <SiCplusplus
                title="C++"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>C++</h3>
            </li>
            <li>
              <SiC
                title="C"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>C</h3>
            </li>
            <li>
              <SiJava
                title="Java"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Java</h3>
            </li>
            <li>
              <SiReact
                title="React.js"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>React.js</h3>
            </li>
            <li>
              <SiSvelte
                title="Svelte.js"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Svelte.js</h3>
            </li>
            <li>
              <SiStyledcomponents
                title="styled-components"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>styled-components</h3>
            </li>
            <li>
              <SiCss3
                title="CSS"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>CSS</h3>
            </li>
            <li>
              <SiFigma
                title="Figma"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Figma</h3>
            </li>
            <li>
              <SiMiro
                title="Miro"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Miro</h3>
            </li>
          </ul>
        </MainSection>
      </AboutStyles>
    </ResponsiveContainer>
  );
}

const AboutStyles = styled.section`
  margin-top: 132px;
  margin-bottom: 160px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  h1 {
    font-size: 68px;
    letter-spacing: 2px;
    margin: -6px 0 0;
    line-height: 68px;

    span {
      color: #9fbd8c;
    }

    @media (max-width: 820px) {
      font-size: 56px;
    }

    @media (min-width: 768px) {
      &:hover + .headshot {
        display: block;
      }
    }
  }

  .headshot {
    display: none;

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 138px;
      opacity: 0.9;
      background: url(img/audrey.png) no-repeat 50% 50%;
      background-size: cover;
    }
  }

  .details__list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    margin: 28px 0 42px;
    padding: 0;

    li + li {
      margin-left: 20px;
    }

    li {
      display: flex;
      align-items: flex-start;
      max-width: 315px;
      letter-spacing: 0.5px;
      margin: 12px 0 20px;
      padding: 0;
      line-height: 1.5;

      span {
        margin-right: 16px;
      }

      p {
        margin: 0;
      }

      a {
        position: relative;
        background-image: linear-gradient(to left, #889c80, #889c80);
        background-repeat: repeat-x;
        background-position: 0 92%;
        background-size: 1px 1px;
      }
    }

    @media (max-width: 1190px) {
      li {
        margin-left: 0 !important;
      }
    }
  }

  .skills__list {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    overflow: auto;
    margin: 16px -24px;

    li {
      max-width: 78px;
      margin: 12px 24px;

      svg {
        display: block;
        margin: 0 auto 12px;
      }

      h3 {
        margin: 0;
        font-family: "Medium", sans-serif;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
`;
