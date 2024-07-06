import React from "react";
import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

import {
  SiAdobexd,
  SiCss3,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiNotion,
  SiReact,
} from "react-icons/si";
import {
  IoCodeSlashOutline,
  IoFlaskOutline,
  IoHeartOutline,
} from "react-icons/io5";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT</SectionTitle>
        <MainSection>
          <h1>
            <span>Hey, I'm</span> Audrey
          </h1>
          <ul className="details__list">
            <li>
              <IoCodeSlashOutline color="#485A3D" size={20} />
              <p>
                I'm a SF-based software developer passionate about creating rich,
                memorable experiences on the web.
              </p>
            </li>
            <li>
              <IoFlaskOutline color="#485A3D" size={20} />
              <p>
                I'm working on experimentation and genAI products for enterprise customers at Adobe.
              </p>
            </li>
            <li>
              <IoHeartOutline color="#485A3D" size={20} />
              <p>
                I'm always craving matcha lattes &amp;{" "}
                <a
                  href="https://vanleeuwenicecream.com/product/vanilla-bean-ice-cream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vanilla ice cream
                </a>
                . I also love to cook and bake in my free time!
              </p>
            </li>
          </ul>
          <SectionHeading>RECENT TECHNOLOGIES</SectionHeading>
          <ul className="skills__list">
            <li>
              <SiReact
                title="React.js"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>React.js</h3>
            </li>
            <li>
              <SiJest title="Jest" style={{ width: "36px", height: "36px" }} />
              <h3>Jest</h3>
            </li>
            <li>
              <SiJavascript
                title="JavaScript"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>JavaScript</h3>
            </li>
            <li>
              <SiCss3 title="CSS" style={{ width: "36px", height: "36px" }} />
              <h3>CSS</h3>
            </li>
            <li>
              <SiNodedotjs
                title="Node.js"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Node.js</h3>
            </li>
            <li>
              <SiExpress
                title="Express"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Express</h3>
            </li>
            <li>
              <SiNotion
                title="Notion"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Notion</h3>
            </li>
            <li>
              <SiFigma
                title="Figma"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Figma</h3>
            </li>
            <li>
              <SiAdobexd
                title="Adobe XD"
                style={{ width: "36px", height: "36px" }}
              />
              <h3>Adobe XD</h3>
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
    font-family: "DM Mono", monospace;
    font-weight: 600;
    font-size: 70px;
    letter-spacing: 0px;
    margin: -6px 0 0;
    line-height: 68px;

    span {
      color: #9fbd8c;
    }

    @media (max-width: 820px) {
      font-size: 56px;
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

      svg {
        min-width: 20px;
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
        font-family: "DM Mono", monospace;
        font-weight: 300;
        font-size: 11px;
        letter-spacing: 1.5px;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
`;
