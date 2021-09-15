import { HeartOutline, SchoolOutline, TerminalOutline } from "react-ionicons";
import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

import {
  CssThree,
  Html5,
  Java,
  Javascript,
  Nextdotjs,
  Nodedotjs,
  Python,
  ReactJs,
  Styledcomponents,
  Swift,
  Typescript,
} from "@icons-pack/react-simple-icons";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT</SectionTitle>
        <MainSection>
          <SectionHeading>HELLO! MY NAME IS</SectionHeading>
          <h1>Audrey</h1>
          <ul className="details__list">
            <li>
              <TerminalOutline color="#d8dbdb" width="20px" height="20px" />
              <p>I'm a Seattle-based software developer who enjoys creating dynamic web applications.</p>
            </li>
            <li>
              <SchoolOutline color="#d8dbdb" width="20px" height="20px" />
              <p>
                I'm studying{" "}
                <a href="https://ischool.uw.edu/" target="_blank" rel="noreferrer">
                  Informatics
                </a>
                &nbsp;with a focus in Software Development &amp; Human-Computer Interaction at the{" "}
                <a href="https://www.washington.edu/" target="_blank" rel="noreferrer">
                  University of Washington.
                </a>
              </p>
            </li>
            <li>
              <HeartOutline color="#d8dbdb" width="20px" height="20px" />
              <p>
                I love to cook and bake in my free time and have an (un)healthy obsession with ramen and everything{" "}
                <a
                  href="https://vanleeuwenicecream.com/product/vanilla-bean-ice-cream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vanilla
                </a>
                !
              </p>
            </li>
          </ul>
          <SectionHeading>RECENT LANGUAGES &amp; TECHNOLOGIES:</SectionHeading>
          <ul className="skills__list">
            <li>
              <Html5 title="HTML" width="36" height="36" />
            </li>
            <li>
              <CssThree title="CSS" width="36" height="36" />
            </li>
            <li>
              <Javascript title="JavaScript" width="36" height="36" />
            </li>
            <li>
              <Typescript title="Typescript" width="36" height="36" />
            </li>
            <li>
              <ReactJs title="React.js" width="36" height="36" />
            </li>
            <li>
              <Nextdotjs title="Next.js" width="36" height="36" />
            </li>
            <li>
              <Styledcomponents title="styled-components" width="36" height="36" />
            </li>
            <li>
              <Nodedotjs title="Node.js" width="36" height="36" />
            </li>
            <li>
              <Java title="Java" width="36" height="36" />
            </li>
            <li>
              <Python title="Python" width="36" height="36" />
            </li>
            <li>
              <Swift title="Swift" width="36" height="36" />
            </li>
          </ul>
        </MainSection>
      </AboutStyles>
    </ResponsiveContainer>
  );
}

const AboutStyles = styled.section`
  margin-top: 140px;
  margin-bottom: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin: 0;
  }

  h1 {
    font-size: 74px;
    letter-spacing: 3px;

    @media (max-width: 768px) {
      font-size: 54px;
    }
  }

  .details__list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
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
        // background: linear-gradient(to left, #2bad7c, #3581de)
        //   left bottom no-repeat;
        // background-size: 100% 1px;
        // border-bottom: solid 1px #7877f7;
        background-image: linear-gradient(to left, #7877f7, #7877f7);
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
    flex-wrap: wrap;
    margin: 12px -20px;
    padding: 0;
    list-style: none;
    overflow: auto;

    li {
      margin: 10px 22px;
    }
  }
`;
