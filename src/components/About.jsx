import React from "react";
import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { colors } from "../theme";

import {
  SiAnthropic,
  SiDocker,
  SiFigma,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import {
  IoCodeSlashOutline,
  IoHeartOutline,
  IoSparklesOutline,
  IoStatsChartOutline,
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
              <IoCodeSlashOutline color={colors.text} size={20} />
              <p>
                SF-based software engineer focused on building rich, performant
                experiences on the web.
              </p>
            </li>
            <li>
              <IoSparklesOutline color={colors.text} size={20} />
              <p>
                Currently building GenAI and experimentation tooling for
                enterprise customers at Adobe Experience Cloud.
              </p>
            </li>
            <li>
              <IoHeartOutline color={colors.text} size={20} />
              <p>
                Outside of work, I'm usually cooking, baking, throwing clay on
                a pottery wheel, or hunting down a good matcha latte and{" "}
                <a
                  href="https://vanleeuwenicecream.com/product/vanilla-bean-ice-cream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vanilla ice cream
                </a>
                .
              </p>
            </li>
          </ul>
          <SectionHeading>RECENT TECHNOLOGIES</SectionHeading>
          <ul className="skills__list">
            <li>
              <SiReact title="React.js" style={{ width: "28px", height: "28px" }} />
              <h3>React.js</h3>
            </li>
            <li>
              <SiTypescript title="TypeScript" style={{ width: "28px", height: "28px" }} />
              <h3>TypeScript</h3>
            </li>
            <li>
              <SiJavascript title="JavaScript" style={{ width: "28px", height: "28px" }} />
              <h3>JavaScript</h3>
            </li>
            <li>
              <SiNextdotjs title="Next.js" style={{ width: "28px", height: "28px" }} />
              <h3>Next.js</h3>
            </li>
            <li>
              <SiNodedotjs title="Node.js" style={{ width: "28px", height: "28px" }} />
              <h3>Node.js</h3>
            </li>
            <li>
              <SiPython title="Python" style={{ width: "28px", height: "28px" }} />
              <h3>Python</h3>
            </li>
            <li>
              <SiFigma title="Figma" style={{ width: "28px", height: "28px" }} />
              <h3>Figma</h3>
            </li>
            <li>
              <SiOpenai title="ChatGPT" style={{ width: "28px", height: "28px" }} />
              <h3>ChatGPT</h3>
            </li>
            <li>
              <SiAnthropic title="Claude Code" style={{ width: "28px", height: "28px" }} />
              <h3>Claude Code</h3>
            </li>
            <li>
              <IoCodeSlashOutline title="Cursor" style={{ width: "28px", height: "28px" }} />
              <h3>Cursor</h3>
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
      color: var(--accent);
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
      line-height: 1.6;

      svg {
        min-width: 20px;
        margin-top: 2px;
        margin-right: 12px;
      }

      p {
        margin: 0;
      }

      a {
        position: relative;
        background-image: linear-gradient(to left, var(--accent), var(--accent));
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
      margin: 12px 18px;

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
