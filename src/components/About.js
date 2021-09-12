import { HeartOutline, SchoolOutline, TerminalOutline } from "react-ionicons";
import styled from "styled-components";
import { MainSection, SectionTitle } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT</SectionTitle>
        <MainSection>
          <h5>HELLO! MY NAME IS</h5>
          <h2>Audrey&mdash;</h2>
          <ul className="details__list">
            <li>
              <TerminalOutline color="#d8dbdb" width="20px" height="20px" />
              <p>
                I'm a Seattle-based software developer who enjoys creating dynamic web applications.
              </p>
            </li>
            <li>
              <SchoolOutline color="#d8dbdb" width="20px" height="20px" />
              <p>
                I'm studying <a href="https://ischool.uw.edu/" target="_blank" rel="noreferrer">
                  Informatics
                </a>
                &nbsp;with a focus in Software Development &amp; Human-Computer Interaction
                at the <a href="https://www.washington.edu/" target="_blank" rel="noreferrer">University of Washington.</a>
              </p>
            </li>
            <li>
              <HeartOutline color="#d8dbdb" width="20px" height="20px" />
              <p>
                I love to cook and bake in my free time and have an (un)healthy obsession with ramen and everything vanilla!
              </p>
            </li>
          </ul>
        </MainSection>
      </AboutStyles>
    </ResponsiveContainer>
  );
}

const AboutStyles = styled.section`
  margin-top: 120px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  h2,
  h5 {
    font-family: 'Whyte Light', sans-serif;
    margin: 0;
  }

  h2 {
    font-size: 74px;
    letter-spacing: 3px;

    @media (max-width: 768px) {
      font-size: 54px;
    }
  }

  ul {
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
      margin: 14px 0;
      padding: 0;
      line-height: 1.5;

      span {
        margin-right: 16px;
      }

      p {
        font-family: 'Whyte Light', sans-serif;
        margin: 0;
      }

      a {
        position: relative;
        // background: linear-gradient(to left, #2bad7c, #3581de)
        //   left bottom no-repeat;
        // background-size: 100% 1px;
        border-bottom: solid 1px #7877F7;
      }
    }

    @media (max-width: 1190px) {
      li {
        margin-left: 0 !important;
      }
    }
  }
`;
