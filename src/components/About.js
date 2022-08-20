import { CodeSlashOutline, HeartOutline, SchoolOutline } from "react-ionicons";
import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

import {
  CssThree,
  Express,
  Figma,
  Html5,
  Java,
  Javascript,
  Mongodb,
  Nodedotjs,
  ReactJs,
  Styledcomponents,
} from "@icons-pack/react-simple-icons";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT</SectionTitle>
        <MainSection>
          <h1><span>Hey, I'm</span> Audrey!</h1>
          <ul className="details__list">
            <li>
              <CodeSlashOutline color="#485A3D" width="20px" height="20px" />
              <p>I'm a Seattle-based software developer who is passionate about frontend development and UX design.</p>
            </li>
            <li>
              <SchoolOutline color="#485A3D" width="20px" height="20px" />
              <p>
                I'm majoring in{" "}
                <a href="https://ischool.uw.edu/" target="_blank" rel="noreferrer">
                  Informatics
                </a>
                &nbsp;with a focus in software development, HCI, and cybersecurity at the{" "}
                <a href="https://www.washington.edu/" target="_blank" rel="noreferrer">
                  University of Washington
                </a>.
              </p>
            </li>
            <li>
              <HeartOutline color="#485A3D" width="20px" height="20px" />
              <p>
                I love to cook and bake in my free time and I'm always craving for coconut water &amp;{" "}
                <a
                  href="https://vanleeuwenicecream.com/product/vanilla-bean-ice-cream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vanilla-flavored
                </a> desserts!
              </p>
            </li>
          </ul>
          <SectionHeading>RECENT LANGUAGES &amp; TECHNOLOGIES:</SectionHeading>
          <ul className="skills__list">
            <li>
              <Java title="Java" width="36" height="36" />
              <h6>Java</h6>
            </li>
            <li>
              <Html5 title="HTML" width="36" height="36" />
              <h6>HTML</h6>
            </li>
            <li>
              <CssThree title="CSS" width="36" height="36" />
              <h6>CSS</h6>
            </li>
            <li>
              <Javascript title="JavaScript" width="36" height="36" />
              <h6>JavaScript</h6>
            </li>
            <li>
              <ReactJs title="React.js" width="36" height="36" />
              <h6>React.js</h6>
            </li>
            <li>
              <Styledcomponents title="styled-components" width="36" height="36" />
              <h6>styled-components</h6>
            </li>
            <li>
              <Nodedotjs title="Node.js" width="36" height="36" />
              <h6>Node.js</h6>
            </li>
            <li>
              <Express title="Express" width="36" height="36" />
              <h6>Express</h6>
            </li>
            <li>
              <Mongodb title="MongoDB" width="36" height="36" />
              <h6>MongoDB</h6>
            </li>
            <li>
              <Figma title="Figma" width="36" height="36" />
              <h6>Figma</h6>
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

  h1 {
    font-size: 68px;
    letter-spacing: 2px;
    margin: -6px 0 0;
    line-height: 70px;

    span {
      color: #A3B994;
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
      letter-spacing: 1px;
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
        margin: 0 auto;
      }

      h6 {
        margin: 0;
        font-family: "Whyte Book", sans-serif;
        font-size: 10px;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
        margin-top: 12px;
      }
    }
  }
`;
